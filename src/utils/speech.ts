// Web Speech API（ブラウザの音声読み上げ機能）で回答例を読み上げる。
// 実際の管制音声ファイルは使用せず、すべてブラウザの合成音声。
//
// 重要な設計方針：
// 画面に表示するテキスト（questions.ts の sampleAnswerLevel4 / Level5）と、
// 読み上げに渡すテキストは分離する。表示側はプレースホルダのまま見せて
// 「コールサインは状況ごとに変わる」ことを学習者に示し、読み上げ側だけを
// 自然に発話できる文字列へ変換する。questions.ts は一切変更しない。

// ============================================================
// 読み上げ用テキストの生成
// ============================================================

/**
 * 読み上げ時に [callsign] の代わりに使う、練習用の架空コールサイン。
 *
 * 実在の機体を指さないための架空値であり、暗記すべき値ではない。
 * 表示側では [callsign] のまま見せているため、学習者が「この機番を覚える」
 * と誤解することはない。
 *
 * 数字は Web Speech API がまとめ読みしないよう、あらかじめ桁ごとの
 * 英単語で書いておく（"123" と書くと "one hundred twenty-three" と
 * 読まれてしまうため）。
 */
const CALLSIGN_SPEECH = 'Skyhawk one two three';

/**
 * 表示用の回答例から、Web Speech API へ渡す読み上げ用テキストを作る。
 *
 * 変換するのはプレースホルダのみ。英字1文字をフォネティックコードへ
 * 置き換えるような処理は行わない。本アプリの回答例には
 * "I am a student pilot." のような平易な英文が多数含まれており、
 * 単独の "I" や "a" を india / alpha に変換すると文章が壊れるため。
 *
 * 数字や taxiway 名は questions.ts の時点ですでに英単語で書かれている
 * （"three four"、"Alpha"、"one two one point five" など）ので、
 * ここでの変換は不要。
 */
export function getSpeechText(displayText: string): string {
  return displayText.replace(/\[callsign\]/g, CALLSIGN_SPEECH);
}

// ============================================================
// 読み上げ速度
// ============================================================

export type SpeedOption = 'normal' | 'slow';

/**
 * 読み上げ速度。
 *
 * 回答例は「学習者が真似るための手本」なので、通常でもやや抑えた速度にする。
 * ゆっくりは、聞き取り・発話練習に使えるよう通常とはっきり差がつく速度にする。
 * Level 4 / Level 5 で速度は変えない（両者の差は内容であって速度ではない）。
 *
 * slow を 0.4 という低い値にしているのは、音声エンジンの rate が線形ではなく、
 * 低い側ほど変化が圧縮されるため。macOSでの実測では 0.65 では通常の1.2倍程度の
 * 長さにしかならず、聞き取り練習として十分な差が出なかった。
 */
const RATE_BY_SPEED: Record<SpeedOption, number> = {
  normal: 0.95,
  slow: 0.4,
};

export function getRate(speed: SpeedOption): number {
  return RATE_BY_SPEED[speed];
}

// ============================================================
// Web Speech API 本体
// ============================================================

export function isSpeechSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window;
}

interface SpeakOptions {
  rate: number;
  /** 使用する話者。null または未指定の場合はブラウザの既定音声を使う */
  voice?: SpeechSynthesisVoice | null;
  onStart?: () => void;
  onEnd?: () => void;
}

/**
 * 読み上げ用テキストを指定の速度・話者で読み上げる。
 * 未対応ブラウザでは何もせず onEnd を呼ぶ。
 */
export function speak(text: string, { rate, voice, onStart, onEnd }: SpeakOptions): void {
  if (!isSpeechSupported()) {
    onEnd?.();
    return;
  }

  // 連打や別ボタンへの切り替えで多重再生にならないよう、必ず先に停止する
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  if (voice) {
    utterance.voice = voice;
  }
  utterance.onstart = () => onStart?.();
  utterance.onend = () => onEnd?.();
  // エラー時も onEnd を呼ぶ。呼ばないとUIが「再生中」のまま固まる
  utterance.onerror = () => onEnd?.();

  window.speechSynthesis.speak(utterance);
}

/** 再生中の読み上げを停止する（画面遷移・問題切り替え時に使用） */
export function cancelSpeech(): void {
  if (isSpeechSupported()) {
    window.speechSynthesis.cancel();
  }
}
