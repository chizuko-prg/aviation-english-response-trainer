// Web Speech API（ブラウザの音声読み上げ機能）で使う話者の取得と選択。
// 実際の管制音声は使用せず、すべてブラウザの合成音声。
//
// SpeechSynthesisVoice には性別や音質の情報が無いため、音声名から推測する
// （ヒューリスティック）。環境（OS・ブラウザ）によって利用できる音声が
// 大きく異なるため、見つからない場合は段階的にフォールバックする。

/**
 * 最優先で使いたい音声名（小文字・部分一致で判定）。
 *
 * 本アプリは航空英語の「手本」を提示するため、男性音声を既定とする。
 * Daniel は英国英語、Alex は米国英語の Apple 標準音声で、どちらも明瞭。
 * Apple環境（macOS / iOS）ではこのいずれかが使えることが多い。
 */
const PREFERRED_MALE_VOICE_NAMES = ['daniel', 'alex'];

/**
 * 男性音声の名前ヒント。
 * Web Speech API の SpeechSynthesisVoice には性別情報が無いため、
 * よく使われる音声名から推測する（ヒューリスティック）。
 */
const MALE_NAME_HINTS = [
  'male', // "Google UK English Male" などを拾う
  'daniel',
  'alex',
  'david',
  'mark',
  'james',
  'arthur',
  'guy',
  'eric',
  'tom',
  'aaron',
  'oliver',
  'george',
  'gordon',
  'rishi',
  'fred',
  'ralph',
  'albert',
  'bruce',
  'junior',
];

/**
 * 女性音声の名前ヒント。
 * "male" は "female" にも含まれてしまうため、判定は必ず女性を先に行う。
 */
const FEMALE_NAME_HINTS = [
  'female',
  'samantha',
  'karen',
  'moira',
  'tessa',
  'victoria',
  'susan',
  'allison',
  'ava',
  'joanna',
  'salli',
  'kendra',
  'kimberly',
  'fiona',
  'serena',
  'zira',
  'google us english', // ChromeのGoogle US Englishは女性声
];

/**
 * 明瞭さに欠けることが知られている音声（主にmacOSの古いシステム音声）。
 * 回答例の手本として読み上げるため、これらは優先対象から外す。
 */
const AVOID_VOICE_NAMES = ['fred', 'ralph', 'albert', 'bruce', 'junior', 'zarvox', 'trinoids'];

function isEnglishVoice(voice: SpeechSynthesisVoice): boolean {
  return voice.lang.toLowerCase().startsWith('en');
}

function isAvoided(voice: SpeechSynthesisVoice): boolean {
  const name = voice.name.toLowerCase();
  return AVOID_VOICE_NAMES.some((hint) => name.includes(hint));
}

function isFemaleVoice(voice: SpeechSynthesisVoice): boolean {
  const name = voice.name.toLowerCase();
  return FEMALE_NAME_HINTS.some((hint) => name.includes(hint));
}

/** 女性判定を先に行うため、女性ヒントに当たる音声は男性とみなさない */
function isMaleVoice(voice: SpeechSynthesisVoice): boolean {
  if (isFemaleVoice(voice)) return false;
  const name = voice.name.toLowerCase();
  return MALE_NAME_HINTS.some((hint) => name.includes(hint));
}

/**
 * 読み上げに使う話者を選ぶ（男性音声を優先）。
 *
 * 優先順位:
 * 1. Daniel（男性）
 * 2. Alex（男性）
 * 3. その他 en-US の男性音声（聞き取りにくい音声を除く）
 * 4. その他の英語男性音声（同上）
 * 5. 英語の女性音声（Samantha など）
 * 6. 残りの英語音声（聞き取りにくい音声も含む最終手段）
 *
 * 該当する音声が一つも無い場合は null を返す。
 * その場合はブラウザの既定音声で読み上げられる（音声が無くても動作する）。
 */
export function pickVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const english = voices.filter(isEnglishVoice);
  if (english.length === 0) return null;

  // 1〜2. Daniel → Alex の順に探す
  for (const preferred of PREFERRED_MALE_VOICE_NAMES) {
    const match = english.find((v) => v.name.toLowerCase().includes(preferred));
    if (match) return match;
  }

  const usable = english.filter((v) => !isAvoided(v));

  // 3. en-US の男性音声
  const usMale = usable.find(
    (v) => v.lang.toLowerCase().startsWith('en-us') && isMaleVoice(v),
  );
  if (usMale) return usMale;

  // 4. その他の英語男性音声
  const anyMale = usable.find(isMaleVoice);
  if (anyMale) return anyMale;

  // 5. 英語の女性音声
  const anyFemale = usable.find(isFemaleVoice);
  if (anyFemale) return anyFemale;

  // 6. 残りの英語音声
  return usable[0] ?? english[0] ?? null;
}

/**
 * ブラウザが保持している音声一覧を取得する。
 *
 * 多くのブラウザ（特にiOS Safari）では初回呼び出し時に空配列が返るため、
 * voiceschanged イベントを待って再取得する。イベントが発火しないブラウザ
 * 向けに、1秒のタイムアウトでフォールバックする。
 */
export function loadVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      resolve([]);
      return;
    }

    const existing = window.speechSynthesis.getVoices();
    if (existing.length > 0) {
      resolve(existing);
      return;
    }

    let resolved = false;
    const finish = () => {
      if (resolved) return;
      resolved = true;
      window.speechSynthesis.removeEventListener('voiceschanged', finish);
      resolve(window.speechSynthesis.getVoices());
    };

    window.speechSynthesis.addEventListener('voiceschanged', finish);
    window.setTimeout(finish, 1000);
  });
}
