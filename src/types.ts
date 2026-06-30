export type Difficulty = 'basic' | 'intermediate' | 'advanced';

export type CategoryId =
  | 'say-again-confirm'
  | 'unable-request'
  | 'situation-report'
  | 'abnormal-emergency'
  | 'training-plain-english';

export interface Question {
  id: string;
  category: CategoryId;
  difficulty: Difficulty;
  situation: string;        // 状況説明（日本語）
  task: string;             // 何を英語で伝えるか（日本語の指示）
  sampleAnswerLevel4: string;
  sampleAnswerLevel5: string;
  keyPhrases: string[];
  selfCheckItems: string[];
  safetyNote?: string;
}

export interface Category {
  id: CategoryId;
  label: string;       // 英語ラベル
  labelJa: string;     // 日本語ラベル
  description: string; // 日本語の短い説明
}

export const CATEGORIES: Category[] = [
  {
    id: 'say-again-confirm',
    label: 'Say Again / Confirm',
    labelJa: '聞き返し・確認',
    description: '聞き取れなかったとき、内容を確認したいときの言い方を練習します。',
  },
  {
    id: 'unable-request',
    label: 'Unable / Request',
    labelJa: '不可・依頼',
    description: '指示に従えないとき、別の許可を求めるときの言い方を練習します。',
  },
  {
    id: 'situation-report',
    label: 'Situation Report',
    labelJa: '状況報告',
    description: '自機の位置・状態・意図を簡潔に伝える練習をします。',
  },
  {
    id: 'abnormal-emergency',
    label: 'Abnormal / Emergency',
    labelJa: '異常・緊急',
    description: 'トラブルや緊急時に状況を正確に伝える練習をします。',
  },
  {
    id: 'training-plain-english',
    label: 'Training Flight Plain English',
    labelJa: '訓練飛行・平易な英語',
    description: '定型文だけでなく、自分の言葉で状況を説明する練習をします。',
  },
];