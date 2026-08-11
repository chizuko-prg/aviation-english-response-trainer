import { useEffect, useState } from 'react';
import { loadVoices, pickVoice } from '../utils/voices';

interface VoiceState {
  /** 読み上げに使う話者。null の場合はブラウザの既定音声で読み上げる */
  voice: SpeechSynthesisVoice | null;
  /** false の間は読み込み中（まだ「音声が無い」と判断しない） */
  loaded: boolean;
}

/**
 * ブラウザが利用できる音声を読み込み、読み上げに使う話者を1つ選ぶ。
 *
 * iOS Safari などでは初回の getVoices() が空配列を返すため、
 * loadVoices() 側で voiceschanged イベントとタイムアウトを待っている。
 */
export function useVoices(): VoiceState {
  const [state, setState] = useState<VoiceState>({ voice: null, loaded: false });

  useEffect(() => {
    let cancelled = false;
    loadVoices().then((voices) => {
      if (!cancelled) {
        setState({ voice: pickVoice(voices), loaded: true });
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
