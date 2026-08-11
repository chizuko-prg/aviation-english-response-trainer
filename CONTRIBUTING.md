# Contributing / コントリビューションについて

Thank you for your interest in this project.

このプロジェクトに関心をお寄せいただきありがとうございます。

This is an aviation English practice application. Because part of the content
relates to aviation safety, contributions are handled in two different ways
depending on what they touch.

本プロジェクトは航空英語の練習用アプリです。内容の一部が航空安全に関わるため、
変更の対象によって取り扱いを分けています。

## 1. Contributions we welcome / 歓迎する貢献

### Technical improvements / 技術的な改善

Pull requests are welcome for:

- Bug fixes
- UI and usability improvements
- Accessibility improvements
- Mobile and browser compatibility fixes
- Performance improvements
- Refactoring and code quality improvements
- Build and tooling improvements

以下については Pull Request を歓迎します。

- バグ修正
- UI・使いやすさの改善
- アクセシビリティの改善
- モバイル・ブラウザ互換性の修正
- パフォーマンス改善
- リファクタリング・コード品質の改善
- ビルド・開発環境の改善

### Documentation improvements / ドキュメントの改善

Also welcome:

- Fixing typos and unclear wording in documentation
- Improving setup instructions
- English translation of documentation
- Clarifying the data structure for people who want to build on this project

次のような改善も歓迎します。

- ドキュメントの誤字・分かりにくい表現の修正
- セットアップ手順の改善
- ドキュメントの英訳
- 本プロジェクトを土台に開発したい方に向けたデータ構造の説明の充実

For these, feel free to open a pull request directly. Opening an issue first is
appreciated for larger changes, but not required for small fixes.

これらについては、直接 Pull Request を送っていただいて構いません。大きな変更の
場合は、事前に Issue を立てていただけると助かります（小さな修正では不要です）。

## 2. Changes that require careful review / 慎重にレビューする変更

Changes to **aviation terminology, question content, sample answers, and
safety-related descriptions** are reviewed carefully and may take time, or may
be declined.

**航空用語・問題文・模範回答・安全に関する記述**の変更は、慎重にレビューします。
時間がかかる場合や、お断りする場合があります。

This applies to:

- `src/data/questions.ts` — all question content
- Category definitions in `src/types.ts`
- Safety notes (`safetyNote`) in any form
- Anything that changes the meaning of a sample answer

対象は次のとおりです。

- `src/data/questions.ts` — すべての問題内容
- `src/types.ts` 内のカテゴリ定義
- 安全に関する記述（`safetyNote`）全般
- 模範回答の意味を変えるあらゆる変更

### Why / 理由

Sample answers and safety notes were written with reference to public sources
such as the FAA Aeronautical Information Manual (AIM) and 14 CFR, and reviewed
for consistency across the whole question set. A change that looks like a small
wording fix can change the meaning of a safety instruction, or make one question
inconsistent with the others.

模範回答や安全に関する記述は、FAA Aeronautical Information Manual (AIM) や
14 CFR などの公開資料を参照して作成し、問題セット全体の整合性を確認しています。
一見わずかな表現修正に見える変更でも、安全に関する説明の意味を変えてしまったり、
他の問題との整合性を損なったりすることがあります。

### How to propose a content change / 内容変更の提案方法

Please **open an issue first** instead of sending a pull request. In the issue,
please include:

1. The question ID (for example, `abn-004`) and the exact text you propose to change
2. What you propose to change it to
3. **Why** — ideally with a reference to an official or public source
   (FAA AIM section, 14 CFR part, ICAO document, etc.)
4. Whether the change affects other questions

Pull requests は送らず、**まず Issue を立ててください**。Issue には次の内容を
含めてください。

1. 問題 ID（例: `abn-004`）と、変更を提案する箇所の原文
2. 変更後の案
3. **その理由** — 可能であれば公式・公開資料の出典（FAA AIM の該当セクション、
   14 CFR の該当部、ICAO 文書など）
4. 他の問題への影響の有無

Reports of factual errors are especially valuable, even without a proposed
rewrite. If you find something that is wrong or misleading, please tell us.

書き換え案がなくても、事実誤りのご指摘は特に価値があります。誤っている箇所や
誤解を招く箇所を見つけた場合は、ぜひお知らせください。

### What is unlikely to be accepted / 採用が難しい変更

- Changes that make safety guidance more specific than official sources support
- Changes that present one operator's or one region's local procedure as universal
- Adding aircraft-specific operating procedures (these belong in the POH, not here)
- Wording changes based on personal preference alone, without a safety or clarity rationale

- 公式資料の裏付けを超えて、安全に関する記述をより断定的にする変更
- 特定の事業者や地域のローカル手順を、普遍的な手順として提示する変更
- 機種固有の操作手順の追加（これは POH に属する内容です）
- 安全性や明確さの理由がなく、個人の好みのみに基づく表現変更

## 3. Official version and derivative versions / 公式版と派生版の区別

This repository is the **official version** of this project.

本リポジトリが、本プロジェクトの**公式版**です。

- Official version: https://github.com/chizuko-prg/aviation-english-response-trainer
- Official deployment: https://aviation-english-response-trainer.vercel.app

You are welcome to fork this project and build your own version. The code is
MIT licensed, and the educational content is CC BY-NC 4.0 licensed. See `LICENSE`
and `LICENSE-CONTENT.md`.

本プロジェクトをフォークして独自の版を作成していただくことは歓迎します。コードは
MIT ライセンス、教材コンテンツは CC BY-NC 4.0 で提供されています。`LICENSE` および
`LICENSE-CONTENT.md` を参照してください。

If you publish a modified version, please:

- **Make clear that it is a derivative version, not the official version.**
- Use a distinct name, or clearly state that it is modified.
- Indicate what you changed, especially if you changed safety-related content.
- Keep the attribution required by CC BY-NC 4.0.
- Do not imply that the original author endorses or has reviewed your version.

改変版を公開する場合は、次の点をお願いします。

- **公式版ではなく派生版であることを明示してください。**
- 別の名称を使うか、改変版である旨を明記してください。
- 変更点、特に安全に関する内容を変更した場合はその内容を示してください。
- CC BY-NC 4.0 が求めるクレジット表示を維持してください。
- 原著者が推奨・確認しているかのような表現は避けてください。

This is not about restricting what you build. It is so that a learner who finds
a modified version can tell whose safety wording they are reading.

これは、皆さんが作るものを制限するためのものではありません。改変版に触れた学習者
が、自分が読んでいる安全に関する記述が誰の責任で書かれたものかを判断できるように
するためです。

## 4. Development / 開発

```bash
npm install
```

```bash
npm run dev
```

Before opening a pull request, please make sure the build passes:

Pull Request を送る前に、ビルドが通ることを確認してください。

```bash
npm run build
```

This runs the TypeScript type check (`tsc`) and the production build.

これは TypeScript の型チェック（`tsc`）と本番ビルドを実行します。

### Notes on the data structure / データ構造について

All questions are defined in `src/data/questions.ts` as a single array of
`Question` objects. The `Question` type is defined in `src/types.ts`.

The application counts questions dynamically, so adding or removing questions
does not require any code change.

すべての問題は `src/data/questions.ts` に `Question` オブジェクトの配列として
定義されています。`Question` 型は `src/types.ts` にあります。

アプリは問題数を動的に数えるため、問題の追加・削除にコードの変更は不要です。

## 5. Reporting problems / 問題の報告

- **Bugs** — please open an issue with steps to reproduce, and your browser and device
- **Content errors** — please follow section 2 above
- **Anything you are unsure about** — an issue is fine; questions are welcome

- **バグ** — 再現手順、ブラウザ、端末を添えて Issue を立ててください
- **内容の誤り** — 上記セクション 2 の方法に従ってください
- **判断に迷うこと** — Issue で構いません。質問も歓迎します

## 6. A note on scope / 本プロジェクトの範囲について

This project is practice material for self-study. It is not an official
assessment tool, and it does not aim to become one. Please keep this in mind
when proposing new features.

本プロジェクトは自己学習のための練習教材です。公式の判定ツールではなく、それを
目指すものでもありません。新機能を提案いただく際は、この点をご考慮ください。
