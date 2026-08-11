# Educational Content License / 教材コンテンツのライセンス

The educational content of this repository is licensed under
**Creative Commons Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)**.

このリポジトリの教材コンテンツは、**クリエイティブ・コモンズ 表示 - 非営利 4.0 国際
（CC BY-NC 4.0）** の下で提供されます。

- License deed: https://creativecommons.org/licenses/by-nc/4.0/
- Legal code: https://creativecommons.org/licenses/by-nc/4.0/legalcode

Copyright (c) 2026 chizuko-prg

## 1. Scope / 適用範囲

This license applies to the educational content, including:

- Question text — situations and tasks (`situation`, `task`)
- Sample answers — Level 4 and Level 5 examples (`sampleAnswerLevel4`, `sampleAnswerLevel5`)
- Key phrases and self-check items (`keyPhrases`, `selfCheckItems`)
- Safety notes and safety-related explanations (`safetyNote`)
- Category names and descriptions
- Content audit records under `docs/`

These are stored primarily in `src/data/questions.ts` and `src/types.ts`
(category definitions).

本ライセンスは、以下の教材コンテンツに適用されます。

- 問題文（状況設定・課題）
- 模範回答（Level 4 / Level 5 の回答例）
- キーフレーズ・自己チェック項目
- 安全関連説明（Safety Note）
- カテゴリ名およびその説明
- `docs/` 以下の内容監査記録

これらは主に `src/data/questions.ts` および `src/types.ts`（カテゴリ定義）に
格納されています。

**Not covered by this license:** the application code, configuration files,
build settings, and icon assets are licensed under the MIT License. See `LICENSE`.

**本ライセンスの対象外:** アプリケーションコード、設定ファイル、ビルド設定、
アイコン素材は MIT ライセンスで提供されます。`LICENSE` を参照してください。

### Note on `src/types.ts` / `src/types.ts` の扱いについて

`src/types.ts` contains both software and educational content, so the two
licenses apply to different parts of the same file:

| Part of `src/types.ts` | License |
| --- | --- |
| Type definitions and structure — `Difficulty`, `CategoryId`, the `Question` interface, the `Category` interface, and the shape of the `CATEGORIES` array | MIT License (see `LICENSE`) |
| Educational text inside the `CATEGORIES` array — category names (`label`, `labelJa`) and their descriptions (`description`) | CC BY-NC 4.0 (this license) |

In practice: you may reuse the type definitions and the data structure freely
under the MIT License, including commercially. The category names and
descriptions written for this project are educational content and fall under
CC BY-NC 4.0.

The same principle applies to `src/data/questions.ts`: the file is TypeScript,
but its contents are educational text, so the questions themselves are covered by
this license.

`src/types.ts` にはソフトウェアと教材コンテンツの両方が含まれるため、同じ
ファイル内でも部分によって適用ライセンスが異なります。

| `src/types.ts` の部分 | ライセンス |
| --- | --- |
| 型定義・構造 — `Difficulty`、`CategoryId`、`Question` インターフェース、`Category` インターフェース、`CATEGORIES` 配列の構造 | MIT ライセンス（`LICENSE` を参照） |
| `CATEGORIES` 配列内の教材テキスト — カテゴリ名（`label`、`labelJa`）およびその説明（`description`） | CC BY-NC 4.0（本ライセンス） |

実際の運用としては、型定義およびデータ構造は MIT ライセンスの下で商用を含めて
自由に再利用できます。本プロジェクトのために書かれたカテゴリ名と説明文は教材
コンテンツであり、CC BY-NC 4.0 の対象です。

`src/data/questions.ts` にも同じ考え方が適用されます。ファイル形式は TypeScript
ですが、その中身は教材テキストであるため、問題そのものは本ライセンスの対象です。

## 2. What you may do / 許可されること

Under CC BY-NC 4.0, you may:

- **Share** — copy and redistribute the content in any medium or format
- **Adapt** — remix, transform, and build upon the content

CC BY-NC 4.0 の下で、次のことが認められます。

- **共有** — あらゆる媒体・形式での複製および再配布
- **翻案** — リミックス、変形、および内容を素材とした二次的著作物の作成

## 3. Conditions / 条件

- **Attribution** — You must give appropriate credit, provide a link to this
  repository and to the license, and indicate if changes were made.
- **NonCommercial** — You may not use the content for commercial purposes.
- **No additional restrictions** — You may not apply legal terms or
  technological measures that legally restrict others from doing anything the
  license permits.

- **表示** — 適切なクレジットを表示し、本リポジトリおよびライセンスへのリンクを
  提供し、変更を加えた場合はその旨を明示してください。
- **非営利** — 営利目的での利用は認められません。
- **追加的な制約の禁止** — ライセンスが許諾することを法的に制限するような法的
  条項や技術的手段を適用してはなりません。

### Attribution example / クレジット表記の例

> Based on "航空英語レスポンストレーナー / Aviation English Response Trainer"
> by chizuko-prg (https://github.com/chizuko-prg/aviation-english-response-trainer),
> licensed under CC BY-NC 4.0. Modified from the original.

## 4. Safety-related content / 安全に関する内容について

The educational content includes safety-related explanations, such as the
distinction between MAYDAY (distress) and PAN-PAN (urgency), and references to
official procedures.

If you adapt or redistribute this content, please note the following:

- **Indicate your changes clearly.** Adapted versions must not be presented as
  the official version of this project. See `CONTRIBUTING.md` for the policy on
  distinguishing official and derivative versions.
- **Do not present adapted content as official guidance.** This content is
  practice material, not a substitute for official procedures.
- Safety-related descriptions were written with reference to public sources such
  as the FAA Aeronautical Information Manual (AIM) and 14 CFR. Verify any
  changes against current official sources.

教材には、MAYDAY（遭難）と PAN-PAN（緊急）の使い分けなど、安全に関する説明が
含まれます。翻案・再配布を行う場合は、次の点にご留意ください。

- **変更点を明確に示してください。** 翻案版を本プロジェクトの公式版として提示
  することはできません。公式版と派生版の区別については `CONTRIBUTING.md` を
  参照してください。
- **翻案した内容を公式な指針として提示しないでください。** 本内容は練習用教材で
  あり、公式手順の代替ではありません。
- 安全に関する記述は、FAA Aeronautical Information Manual (AIM) や 14 CFR
  などの公開資料を参照して作成しています。変更を加える場合は、必ず最新の公式
  資料で確認してください。

## 5. Disclaimer / 免責事項

This content is provided for self-study and practice purposes only.

- It is **not** an official ICAO aviation English proficiency assessment tool,
  and does not guarantee any test result or certification.
- Sample answers are reference examples, not the only correct answers.
- The labels "Level 4" and "Level 5" are used for convenience. ICAO levels
  describe a speaker's proficiency, not the rating of an individual sentence.
- This content must **not** be used for actual flight operations or operational
  decision-making. Always follow your instructor, your organization's
  regulations, and official procedures.

本コンテンツは、自己学習・自己練習のみを目的として提供されます。

- ICAO 航空英語能力証明の公式判定ツールでは**ありません**。合否や認定を保証する
  ものでもありません。
- 模範回答は参考例であり、唯一の正解ではありません。
- 「Level 4」「Level 5」という表記は便宜的なものです。ICAO の Level は話者の
  能力等級であり、個々の文の等級ではありません。
- 実際の航空業務や運航判断に使用しては**なりません**。必ず教官・所属機関の規程・
  公式手順に従ってください。

To the extent permitted by law, the content is provided "as is", without warranty
of any kind, and the copyright holder shall not be liable for any claim, damages,
or other liability arising from its use.

法令が許す範囲において、本コンテンツは「現状のまま」提供され、いかなる保証も
伴いません。また、その利用に起因する一切の請求・損害・責任について、著作権者は
責任を負いません。

## 6. Commercial use / 商用利用について

Commercial use is not permitted under this license. If you would like to use the
educational content commercially, please open an issue in this repository to
discuss it.

本ライセンスでは商用利用は認められていません。教材コンテンツの商用利用を希望
される場合は、本リポジトリの Issue でご相談ください。
