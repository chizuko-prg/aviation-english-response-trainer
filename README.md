# 航空英語レスポンストレーナー

Aviation English Response Trainer

## English Overview

**Aviation English Response Trainer** is a web application for practicing spoken
responses in aviation English.

Rather than listening comprehension, it focuses on **output**: you read a
situation and a task presented in Japanese, say your own answer out loud, and
then compare it with sample answers, key phrases, self-check items, and a safety
note.

- **100 scenario-based questions** across 5 categories (20 each): Say Again /
  Confirm, Unable / Request, Situation Report, Abnormal / Emergency, and
  Training Flight Plain English
- Two sample answers per question (ICAO Level 4 and Level 5 oriented), showing
  that **more than one natural answer is possible** for the same situation
- Designed for smartphones; installable to the home screen as a web app
- No account and no backend. Anonymous usage analytics may be collected for
  service improvement.

**This project is for educational and self-study use only.** It is not an
official ICAO aviation English proficiency assessment tool and does not
guarantee any test result or certification. It must **not** be used for actual
flight operations or operational decision-making. Always follow your instructor,
your organization's regulations, and official procedures.

Live app: https://aviation-english-response-trainer.vercel.app
(User interface and question text are in Japanese; sample answers are in English.)

Licensing, contribution guidelines, and notes on how the content was prepared are
described in the English sections at the end of this document.

## 1. 概要

航空英語の「応答」を練習するための Web アプリです。

日本語で提示される状況（Situation）と課題（Task）を読み、それに対して**自分の英語で声に出して答える**という流れで学習します。答えたあとに Level 4 / Level 5 相当の回答例、キーフレーズ、自己チェック項目、安全上の留意点（Safety Note）を確認できます。

聞き取り（リスニング）教材ではなく、**自分から発話するアウトプット練習**に主眼を置いています。スマートフォンでの利用を想定したダークテーマの UI で、ホーム画面に追加してスタンドアロン表示できる Web App Manifest を同梱しています。

## 2. 対象ユーザー

- 航空英語を学ぶ人
- ICAO Level 4〜5 相当の応答力を意識して練習したい学習者
- 定型文だけでなく、平易な英語（Plain English）で状況を説明する練習をしたい人

本アプリは練習・自己評価のための教材であり、試験の合否や資格の取得を保証するものではありません。

## 3. 学習内容

全 **5 カテゴリ・100 問**（各カテゴリ 20 問）を収録しています。

| カテゴリ | 日本語ラベル | 内容 | 問題数 |
| --- | --- | --- | --- |
| Say Again / Confirm | 聞き返し・確認 | 聞き取れなかったとき、内容を確認したいときの言い方 | 20 |
| Unable / Request | 不可・依頼 | 指示に従えないとき、別の許可を求めるときの言い方 | 20 |
| Situation Report | 状況報告 | 自機の位置・状態・意図を簡潔に伝える | 20 |
| Abnormal / Emergency | 異常・緊急 | トラブルや緊急時に状況を正確に伝える | 20 |
| Training Flight Plain English | 訓練飛行・平易な英語 | 定型文だけでなく、自分の言葉で状況を説明する | 20 |

難易度の内訳は Basic 37 問 / Intermediate 39 問 / Advanced 24 問です。

各問題は以下の要素で構成されています（100 問すべてに全項目が設定されています）。

- **難易度バッジ** — Basic / Intermediate / Advanced の 3 段階
- **Situation / 状況** — 日本語による状況説明
- **Task / あなたの課題** — 何を英語で伝えるかの指示（日本語）
- **Level 4 向け回答例** — 簡潔で意味が通じる言い方
- **Level 5 向け回答例** — より詳しく、状況を補足した言い方
- **Key Phrases / キーフレーズ** — その場面で使える表現
- **Self Check / 自己チェック** — 自分の回答を振り返るチェックリスト（タップでオン / オフを切り替え）
- **Safety Note / 安全上の留意** — その応答が安全上なぜ重要かの補足

回答例は Level 4 / Level 5 の 2 通りが示されており、**同じ状況に対して複数の自然な答え方があり得る**ことを確認できます。

## 4. 学習方針

- **丸暗記ではなく、自分の言葉で自然に応答すること**を重視します。回答例は「正解」ではなく参考例です。
- **Plain English を意識**します。定型文（phraseology）で表現しきれない状況を、平易な英語で説明する練習を含みます。
- **答えを見る前に、まず声に出して言ってみる**流れを想定した画面構成になっています。
- 自己チェック項目は正誤の採点ではなく、自分の発話を振り返るための観点です。

## 5. 使い方

1. **トップ画面** — アプリの目的と注意事項を確認し、「練習を始める」をタップします。
2. **カテゴリ選択画面** — 5 つのカテゴリから 1 つを選びます。各カテゴリの問題数が表示されます。
3. **問題画面**
   - Situation（状況）と Task（課題）を読みます。
   - **まず声に出して、自分の英語で答えます。**
   - 「模範回答を見る」をタップすると、Level 4 / Level 5 の回答例、キーフレーズ、自己チェック、Safety Note が表示されます。
   - 自己チェック項目をタップして振り返ります。
   - 「次の問題へ →」で進みます（最終問題では「カテゴリを完了する →」になります）。
4. **完了画面** — 練習した問題数が表示されます。「このカテゴリをもう一度」「カテゴリへ戻る」「トップへ戻る」から選べます。

画面上部のヘッダー（タイトル部分）をタップすると、いつでもトップ画面に戻れます。画面が切り替わったときは自動でページ先頭にスクロールします。

## 6. 主な機能

現在実装されている機能は次のとおりです。

- トップ / カテゴリ選択 / 問題 / 完了 の 4 画面構成
- 5 カテゴリ × 20 問（計 100 問）の問題データ
- カテゴリごとの問題数表示
- 難易度バッジ（Basic / Intermediate / Advanced）の表示
- 「模範回答を見る」による回答例の表示切り替え（答えを見る前に自分で言う設計）
- Level 4 向け・Level 5 向けの 2 種類の回答例表示
- キーフレーズの一覧表示
- 自己チェック項目のチェック / チェック解除（問題ごとにリセット）
- Safety Note の表示（全 100 問に設定）
- 「n / 全体数」の進捗表示
- カテゴリ完了画面と、同一カテゴリの再挑戦
- トップ画面での免責表示
- スマートフォン向けの調整
  - 画面遷移・問題切り替え・回答表示のたびにページ先頭へ自動スクロール（iOS Safari / Android Chrome 双方に対応するため複数の手段を併用）
  - `100dvh` とセーフエリア（`env(safe-area-inset-bottom)`）を考慮したレイアウト
  - ファビコン / Apple Touch Icon / Web App Manifest（`display: standalone`）を同梱
- Vercel Web Analytics によるアクセス計測

**現時点で実装されていない機能**（誤解を避けるための補足）

- 録音・音声再生・音声認識はありません（問題画面のマイクのアイコンは「声に出す」ことを促すための表示です）
- 回答の自動採点・AI 判定はありません
- 学習履歴の保存機能はありません（ページを再読み込みすると進捗はリセットされます）

## 7. 技術構成

`package.json` および設定ファイルで確認できる構成は以下のとおりです。

- **React** 18（`react` / `react-dom`）
- **TypeScript** 5（`strict` 有効）
- **Vite** 6（`@vitejs/plugin-react`）
- **Tailwind CSS** 3（PostCSS / Autoprefixer）
- **@vercel/analytics** 2（`src/main.tsx` で `<Analytics />` を描画）

状態管理はすべて `App.tsx` 内の `useState` で完結しており、外部の状態管理ライブラリやルーターは使用していません。バックエンド・データベース・独自 API との通信はありません（アクセス計測を除く）。問題データは `src/data/questions.ts` に静的に定義されています。

### ディレクトリ構成

```
aviation-english-response-trainer/
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── docs/
│   └── audit-summary-2026-07-16.md   # 問題文の内容監査の記録
├── public/
│   ├── favicon.ico / favicon-16x16.png / favicon-32x32.png
│   ├── apple-touch-icon.png
│   ├── icon-192.png / icon-512.png
│   └── manifest.webmanifest
└── src/
    ├── main.tsx           # エントリーポイント
    ├── App.tsx            # 画面全体（4画面ぶんのコンポーネント）
    ├── types.ts           # 型定義とカテゴリ定義
    ├── index.css          # Tailwind の読み込みと基本スタイル
    └── data/
        └── questions.ts   # 問題データ（全100問）
```

### セットアップ

```bash
npm install
```

```bash
npm run dev
```

その他のスクリプト:

- `npm run build` — 型チェック（`tsc`）のうえで本番ビルド
- `npm run preview` — ビルド結果のローカルプレビュー

## 8. 公開URL

- https://aviation-english-response-trainer.vercel.app

Vercel でホスティングしています（GitHub リポジトリの homepage 設定に登録されており、2026-08-09 時点で応答を確認）。

ソースコードのリポジトリ:

- https://github.com/chizuko-prg/aviation-english-response-trainer

## 9. 注意事項・免責

アプリ内（トップ画面）にも同趣旨の注意書きを表示しています。

- 本アプリは**学習・自己練習用**の教材です。
- **実際の航空業務や運航判断に使用するものではありません。**
- 本アプリは **ICAO 航空英語能力証明の公式判定アプリではありません**。Level 4〜5 相当の練習・自己評価を目的としており、**合否や認定を保証するものではありません**。
- 「Level 4 向け回答例」「Level 5 向け回答例」という表記は便宜的なものです。ICAO の Level は本来「話者の能力等級」であって「個々の文の等級」ではありません。
- 収録されている回答例は参考例であり、唯一の正解ではありません。実際の運用にあたっては、所属機関の規程および公式資料に従ってください。

## 10. 開発・保守

- 現在のバージョンは `0.1.0` です。
- 問題文・回答例の内容については、`docs/audit-summary-2026-07-16.md` に監査の記録があります（2026-07-16 時点、当時の 50 問を対象としたものです）。
- 今後は、問題文・回答例の記述の誤りの修正、表現の見直し、UI の使いやすさの改善といった品質改善を想定しています。
- 具体的な機能追加のロードマップは本リポジトリ内に定義されていないため、本 README では記載していません。

---

## About the Educational Content

This content was created for aviation English education, with a focus on learners
preparing for flight training.

**How it was prepared**

- Safety-related descriptions were written with reference to publicly available
  sources, including official aviation information manuals and applicable
  regulations, and were checked against those sources before being adopted.
- The question set was reviewed for internal consistency: how each category
  handles its role, whether sample answers match the situation described, and
  whether safety notes agree with one another.
- Where a procedure varies by aircraft, operator, or region, the content
  deliberately does not state a single answer. It defers to the POH, checklists,
  the instructor, and local procedures.

**Limitations**

- Sample answers are reference examples, not the only correct answers.
- The labels "Level 4" and "Level 5" are used for convenience. ICAO levels
  describe a speaker's proficiency, not the rating of an individual sentence.
- Regulations and procedures change. Always verify against current official
  sources.
- This is practice material, not a substitute for official guidance or
  instruction.

**Reporting a content issue**

If you find an error, please open an issue with the question ID and, where
possible, a reference to an official or public source supporting the correction.
Proposals with a stated basis can be reviewed and acted on much faster. See
[CONTRIBUTING.md](CONTRIBUTING.md).

A record of one content review is kept in
[`docs/audit-summary-2026-07-16.md`](docs/audit-summary-2026-07-16.md)
(dated 2026-07-16, covering the 50 questions in the set at that time).

## License

This repository uses **two different licenses**, because it contains both
software and educational content.

| Part | License | What it covers |
| --- | --- | --- |
| Software code | [MIT License](LICENSE) | Application code, type definitions, configuration and build files, icon assets |
| Educational content | [CC BY-NC 4.0](LICENSE-CONTENT.md) | Question text, sample answers, key phrases, self-check items, safety notes, category descriptions, and the audit record under `docs/` |

**In short:** you may use, modify, and redistribute the code freely, including
commercially. The educational content may be shared and adapted for
**non-commercial** purposes with appropriate credit.

The educational content is stored mainly in `src/data/questions.ts`, with
category definitions in `src/types.ts`. See
[LICENSE-CONTENT.md](LICENSE-CONTENT.md) for the full scope, attribution
requirements, and notes on adapting safety-related descriptions.

If you would like to use the educational content commercially, please open an
issue to discuss it.

## Contributing

Contributions are welcome. Because part of this project relates to aviation
safety, contributions are handled in two ways depending on what they touch.

**Pull requests are welcome for:** bug fixes, UI and usability improvements,
accessibility, mobile and browser compatibility, performance, refactoring, build
tooling, and documentation (including English translation).

**Changes to aviation terminology, question content, sample answers, and
safety-related descriptions are reviewed carefully.** For these, please **open an
issue first** instead of sending a pull request, and include the question ID, the
proposed change, and the reason - ideally with a reference to an official or
public source. Sample answers and safety notes were written to be consistent
across the whole question set, so a small wording change can affect more than one
question.

Reports of factual errors are valuable even without a proposed rewrite. If you
find something that is wrong or misleading, please tell us.

See [CONTRIBUTING.md](CONTRIBUTING.md) for details, including the policy on
distinguishing the official version from derivative versions.

## AI-Assisted Development

This project was developed using an AI-assisted workflow. AI coding assistants
were used for:

- **Implementation support** - writing and refactoring application code
- **Review support** - checking consistency across the question set, finding
  contradictions, and cross-checking terminology
- **Documentation support** - drafting and organizing documentation

**Human judgment remained responsible for:**

- Final design decisions and the scope of the project
- **All safety-related policy** - how MAYDAY, PAN-PAN, and normal reports are
  distinguished, what is stated as fact, and what is deferred to official
  procedures
- Verifying aviation content against public sources before adopting it
- Deciding what to accept, revise, or reject

AI-generated wording was not adopted as-is for aviation content. Suggestions were
reviewed, corrected, and in some cases rejected - for example, phrasing that
sounded natural but did not match how a procedure is actually used, or wording
that stated something more definitively than the source material supports.

Note that this section describes the development process. **The application
itself contains no AI features** - there is no automatic grading and no AI
evaluation of your answers. The app presents fixed sample answers for you to
compare against your own spoken response.
