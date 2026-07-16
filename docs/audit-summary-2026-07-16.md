# 航空英語レスポンストレーナー 全50問 監査サマリー

監査日: 2026-07-16 / 対象: `src/data/questions.ts`（全50問・5カテゴリ）+ UI表記（App.tsx 参照のみ）

## 1. 全体総評

**現在の品質:** 高い。全カテゴリで「短いL4例 → 状況説明を加えたL5例 → keyPhrases → 自己チェック → 安全注意」の構成が一貫しており、優先修正一巡後は、安全上の重大な問題は残っていない。

**自己練習用としての妥当性:** 妥当。トップ画面に「公式判定アプリではない・合否や認定を保証しない」旨の免責が明示されており、「公式ICAO判定」「合格保証」に見える表現は問題文・UI・safetyNoteのいずれにも存在しない。緊急カテゴリ等のsafetyNoteには「実運航では教官・会社・公式手順に従う」趣旨を追記済みで、公式手順の代替に見えるリスクは低減済み。

**安全上の残リスク:** 大きなものはなし。残るのは補足レベル（abn-004のMAYDAYエスカレーション追記など優先度A参照）。

**Level 4/5表記の注意点:** ICAO Levelは「話者の能力等級」であり「文の等級」ではないため、「Level 4向け回答例」という表記は簡略化である。免責があるため現状許容範囲だが、将来的に「Level 4相当の目安」等への変更を検討（App.tsx変更が必要なため未着手）。

**運用方針（フォルダ）:** 今後の正本は `aviation-english-response-trainer-clean` に統一する。旧フォルダ・Developer側フォルダは参照用・バックアップ扱いとし、編集対象にしない。

## 2. カテゴリ別監査結果

### Say Again / Confirm（聞き返し・確認）

- **総評:** 質が高い。「確認せず動かない」という安全方針が一貫。
- **修正済み:** sac-007（ICAO標準句化）、sac-008（L4/L5差の明確化）
- **後日候補:** sac-003/004/010の表現微調整、sac-002のand/カンマ統一、sac-009の平文化、コールサイン統一
- **安全上の残リスク:** なし

### Unable / Request（不可・依頼）

- **総評:** 「Unable=正当な応答」「代替案を添える」の教育方針が優秀。
- **修正済み:** unr-005（"the option"混同の解消）、unr-007（minimum fuel補足）
- **後日候補:** unr-004語順、unr-006/009 "if able"→"if possible"、unr-003/008自然さ、unr-010場面の現実性、コールサイン統一
- **安全上の残リスク:** なし

### Situation Report（状況報告）

- **総評:** 報告の基本形が揃い、sit-006/007（in sight / negative contact）の対が秀逸。
- **修正済み:** sit-002（軍用調"one plus three zero"・souls排除、L4短縮）、sit-010（request vectors具体化+PAN-PAN/MAYDAY橋渡し追記）
- **後日候補:** sit-004場面と回答の不一致（通過時刻）、sit-006 visual separation自発宣言の調整、sit-009 L5情報量、コールサイン統一
- **安全上の残リスク:** なし

### Abnormal / Emergency（異常・緊急）

- **総評:** PAN-PAN/MAYDAYの反復・伝達順序・キャンセルまで流れが揃う。最重要カテゴリの修正は完了。
- **修正済み:** abn-007（「not an emergency yet」矛盾解消+minimum fuel補足）、全L4への `[callsign]` 追加（10問）、abn-002（souls→persons+練習用免責追記）
- **後日候補:** abn-004のMAYDAYエスカレーション追記、abn-003/009のL5コールサイン
- **安全上の残リスク:** 軽微（abn-004の補足のみ。現状でも誤誘導はない）

### Training Flight Plain English（訓練飛行・平易な英語）

- **総評:** 5カテゴリ中最も完成度が高い。口述試験形式に近く教材価値大。
- **修正済み:** trn-001（「ステアターン」→「スティープターン」）
- **後日候補:** trn-004 米国式"pattern"用語補足、trn-003 "student pilot"のコールサイン付加慣行の補足、trn-001/004/009へのコールサイン検討
- **安全上の残リスク:** なし

## 3. 今回修正済みの一覧

| id | 修正内容 |
|---|---|
| sac-007 | L4/L5をICAO標準句 "Say again all after [first point], [callsign]." 形式に。keyPhrases追随 |
| sac-008 | L5に状況説明を追加（"Tower, confirm [callsign] is cleared to land runway three four, I did not catch a clear reply."） |
| unr-005 | L5を "Request touch and go, then one more circuit, [callsign]." に。keyPhrasesから'the option'除去。safetyNoteに「the optionはタッチアンドゴー以外も含む」英文追記 |
| unr-007 | safetyNoteに "minimum fuel" 公式アドバイザリ+教官・会社・公式手順に従う旨を追記 |
| sit-002 | L4を民間形式に（"fuel one hour three zero, two on board"）、L5書き直し、souls排除、keyPhrases追随 |
| sit-010 | L4/L5を "request vectors to the field" に具体化。safetyNoteにPAN-PAN/MAYDAY+公式手順追記 |
| abn-001〜010 | 全L4に `[callsign]` 追加（abn-003は文頭、abn-009は文末） |
| abn-002 | L4 souls→persons。safetyNoteに「本アプリは練習用・実運航では公式手順に従う」追記 |
| abn-007 | 「not an emergency yet」削除、L5を "no delay acceptable" に。keyPhrases追随。safetyNoteにminimum fuel追記 |
| trn-001 | 場面設定「ステアターン」→「スティープターン」 |

検証: 各修正は build / commit / push / Vercel反映確認済み。ファイル全体で "souls"・"not an emergency yet"・"ステアターン" は0件。

## 4. 後日ブラッシュアップ候補一覧

**優先度A（次回早めに）**

- abn-004: safetyNoteに「煙・火の悪化時はためらわずMAYDAYへ」追記
- sit-004: 場面設定（通過時刻）と回答例の不一致解消
- unr-004: L5語順修正（"best rate of climb is all I can give" 等）

**優先度B（余裕がある時に）**

- sac-003/004/010: 表現の自然さ微調整（レビュー時の候補文あり）
- unr-006/009: "if able"→"if possible"
- unr-003/008: 表現微調整
- sit-006: visual separation自発宣言の調整
- sit-009: L5の情報量改善
- trn-003: "student pilot" コールサイン付加慣行のsafetyNote補足
- trn-004: 米国式 "pattern" 用語のsafetyNote補足
- unr-010: 場面設定の現実性調整

**優先度C（全体統一時にまとめて）**

- コールサイン方針の全カテゴリ統一（現状: abn全問+sac-007/008+unr-005のみ `[callsign]` あり）
- safetyNoteの日本語+英語追記混在スタイルの統一
- UI表記「Level 4向け回答例」→「Level 4相当の目安」等の検討（App.tsx変更が必要）
- sac-002 and/カンマ統一、sac-009平文化などの微細項目
- keyPhrasesと回答例の整合の全問一括チェック

## 5. 今後の推奨作業順

作業の進め方: 編集対象は正本 `aviation-english-response-trainer-clean` のみ。修正ごとに build → commit → push → Vercel反映確認 のサイクルで進める。旧フォルダ・Developer側フォルダは参照用・バックアップとして残し、編集しない。

1. **優先度A の3件** — 安全補足（abn-004）と整合性（sit-004, unr-004）。小さいので1サイクルで完了可能。
2. **優先度B をカテゴリ単位で** — sac → unr → sit → trn の順（レビュー済み候補文をそのまま使える）。カテゴリごとに build → commit → push → Vercel反映確認。
3. **優先度C の統一パス** — コールサイン方針を決めてから全問一括適用+keyPhrases整合チェック+grep/build回帰確認。UI文言（App.tsx）はこのタイミングで。

## 6. X / READMEに書ける短い説明文

**X向け（短）:**

> 航空英語レスポンストレーナー、公開後レビューを一巡しました。全50問の英語表現と安全面を見直し、ICAO標準句への整合、緊急通報でのコールサイン明示、PAN-PAN/MAYDAYの線引き明確化などを反映。引き続き自己練習用ツールとしてご活用ください（公式判定・合否保証はありません）。

**README向け:**

> 公開後、収録全50問について航空英語表現と安全面のレビューを一巡し、ICAO標準句との整合（例: "Say again all after ..."）、緊急通報時のコールサイン明示、PAN-PAN/MAYDAYの使い分けの明確化、民間訓練に即した表現への統一などを行いました。本アプリはICAO航空英語能力証明の公式判定を行うものではなく、合否や認定を保証するものでもありません。渡米前の自己練習・自己評価を目的としています。実運航では教官・会社・公式手順に従ってください。
