import { useEffect, useRef, useState } from 'react';
import { CATEGORIES, Category, CategoryId, Question } from './types';
import { QUESTIONS } from './data/questions';

type Screen = 'top' | 'category' | 'question' | 'complete';

const difficultyLabel: Record<Question['difficulty'], string> = {
  basic: 'Basic',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};

const difficultyColor: Record<Question['difficulty'], string> = {
  basic: 'bg-emerald-900/40 text-emerald-300 border-emerald-700/50',
  intermediate: 'bg-amber-900/40 text-amber-300 border-amber-700/50',
  advanced: 'bg-rose-900/40 text-rose-300 border-rose-700/50',
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('top');
  const [activeCategory, setActiveCategory] = useState<CategoryId | null>(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  // 回答・模範回答の表示制御
  const [revealed, setRevealed] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  // ページ先頭の目印
  const topRef = useRef<HTMLDivElement>(null);

  // iOS Safari / Android Chrome の両方で確実に先頭へ戻す helper
  const scrollToTop = () => {
    const doScroll = () => {
      // 複数の手段を併用（ブラウザによって効くものが異なる）
      try {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } catch {
        window.scrollTo(0, 0);
      }
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
      topRef.current?.scrollIntoView({ block: 'start', behavior: 'auto' });
    };

    // 即時 + 描画後(rAF) + さらに後(timeout) の三段で確実に
    doScroll();
    requestAnimationFrame(() => {
      doScroll();
      setTimeout(doScroll, 0);
    });
  };

  // 画面遷移・問題切り替え・回答表示の変化時に先頭へ
  useEffect(() => {
    scrollToTop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screen, activeCategory, questionIndex, revealed]);

  const categoryQuestions = activeCategory
    ? QUESTIONS.filter((q) => q.category === activeCategory)
    : [];
  const currentQuestion = categoryQuestions[questionIndex];
  const activeCategoryData = activeCategory
    ? CATEGORIES.find((c) => c.id === activeCategory) ?? null
    : null;

  const goToTop = () => {
    setScreen('top');
    setActiveCategory(null);
    scrollToTop();
  };

  const goToCategory = () => {
    setScreen('category');
    setActiveCategory(null);
    scrollToTop();
  };

  const selectCategory = (id: CategoryId) => {
    setActiveCategory(id);
    setQuestionIndex(0);
    setRevealed(false);
    setCheckedItems(new Set());
    setScreen('question');
    scrollToTop();
  };

  const restartCategory = () => {
    setQuestionIndex(0);
    setRevealed(false);
    setCheckedItems(new Set());
    setScreen('question');
    scrollToTop();
  };

  const nextQuestion = () => {
    // 最終問題なら完了画面へ。それ以外は次の問題へ。
    if (questionIndex >= categoryQuestions.length - 1) {
      setScreen('complete');
      scrollToTop();
      return;
    }
    setRevealed(false);
    setCheckedItems(new Set());
    setQuestionIndex((prev) => prev + 1);
    scrollToTop();
  };

  const toggleCheck = (i: number) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  return (
    <div className="flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 text-slate-100">
      {/* ページ先頭の目印（scrollIntoView 用） */}
      <div ref={topRef} aria-hidden="true" />

      {/* ヘッダー */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur">
        <div className="mx-auto max-w-2xl px-4 py-3 flex items-center gap-3">
          <button
            onClick={goToTop}
            className="flex items-center gap-2 text-left"
          >
            <span className="text-sky-400 text-xl leading-none">✈</span>
            <div>
              <div className="text-sm font-semibold tracking-wide text-slate-100">
                Aviation English Response Trainer
              </div>
              <div className="text-[11px] text-slate-400">
                航空英語レスポンストレーナー
              </div>
            </div>
          </button>
        </div>
      </header>

      <main className="mx-auto w-full max-w-2xl flex-1 px-4 py-6 pb-[calc(env(safe-area-inset-bottom)+4rem)]">
        {screen === 'top' && <TopScreen onStart={goToCategory} />}

        {screen === 'category' && (
          <CategoryScreen onSelect={selectCategory} />
        )}

        {screen === 'question' && currentQuestion && (
          <QuestionScreen
            question={currentQuestion}
            index={questionIndex}
            total={categoryQuestions.length}
            revealed={revealed}
            onReveal={() => setRevealed(true)}
            onNext={nextQuestion}
            onBack={goToCategory}
            checkedItems={checkedItems}
            onToggleCheck={toggleCheck}
          />
        )}

        {screen === 'complete' && activeCategoryData && (
          <CompleteScreen
            category={activeCategoryData}
            total={categoryQuestions.length}
            onRestart={restartCategory}
            onBackToCategory={goToCategory}
            onBackToTop={goToTop}
          />
        )}
      </main>
    </div>
  );
}

/* ---------- トップ画面 ---------- */
function TopScreen({ onStart }: { onStart: () => void }) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6">
        <h1 className="text-lg font-semibold leading-relaxed text-slate-100">
          声に出して、航空英語を練習する
        </h1>
        <p className="mt-3 text-sm leading-7 text-slate-300">
          ATCを聞き取るだけでなく、自分の英語で「確認する」「依頼する」
          「状況を説明する」「異常時に伝える」練習をします。
          渡米前の自己練習・自己評価にお使いください。
        </p>
        <button
          onClick={onStart}
          className="mt-5 w-full rounded-lg bg-sky-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 active:bg-sky-700"
        >
          練習を始める
        </button>
      </div>

      <div className="rounded-xl border border-amber-800/40 bg-amber-950/20 p-4">
        <div className="text-xs font-semibold text-amber-300">ご注意</div>
        <p className="mt-1.5 text-xs leading-6 text-amber-200/80">
          本アプリはICAO航空英語能力証明の公式判定アプリではありません。
          Level 4〜5相当の練習・自己評価を目的としています。
          合否や認定を保証するものではありません。
        </p>
      </div>
    </div>
  );
}

/* ---------- カテゴリ選択画面 ---------- */
function CategoryScreen({
  onSelect,
}: {
  onSelect: (id: CategoryId) => void;
}) {
  const count = (id: CategoryId) =>
    QUESTIONS.filter((q) => q.category === id).length;

  return (
    <div className="space-y-3">
      <h2 className="text-sm font-semibold text-slate-400">
        カテゴリを選択
      </h2>
      {CATEGORIES.map((cat: Category) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className="w-full rounded-xl border border-slate-800 bg-slate-900/50 p-4 text-left transition hover:border-sky-700/60 hover:bg-slate-900 active:bg-slate-800"
        >
          <div className="flex items-center justify-between gap-3">
            <div className="text-sm font-semibold text-slate-100">
              {cat.label}
            </div>
            <span className="flex-none text-[11px] text-slate-500">
              {count(cat.id)}問
            </span>
          </div>
          <div className="mt-0.5 text-xs text-sky-400">{cat.labelJa}</div>
          <p className="mt-2 text-xs leading-6 text-slate-400">
            {cat.description}
          </p>
        </button>
      ))}
    </div>
  );
}

/* ---------- 問題画面 ---------- */
function QuestionScreen({
  question,
  index,
  total,
  revealed,
  onReveal,
  onNext,
  onBack,
  checkedItems,
  onToggleCheck,
}: {
  question: Question;
  index: number;
  total: number;
  revealed: boolean;
  onReveal: () => void;
  onNext: () => void;
  onBack: () => void;
  checkedItems: Set<number>;
  onToggleCheck: (i: number) => void;
}) {
  const isLast = index >= total - 1;

  return (
    <div className="space-y-4">
      {/* 進捗・戻る */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className="-ml-1 rounded px-1 py-1 text-xs text-slate-400 hover:text-slate-200"
        >
          ← カテゴリ
        </button>
        <span className="text-xs text-slate-500">
          {index + 1} / {total}
        </span>
      </div>

      {/* 難易度バッジ */}
      <div>
        <span
          className={`inline-block rounded border px-2 py-0.5 text-[11px] font-medium ${difficultyColor[question.difficulty]}`}
        >
          {difficultyLabel[question.difficulty]}
        </span>
      </div>

      {/* 状況 */}
      <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
          Situation / 状況
        </div>
        <p className="mt-2 text-sm leading-7 text-slate-200">
          {question.situation}
        </p>
      </section>

      {/* タスク */}
      <section className="rounded-xl border border-sky-800/40 bg-sky-950/20 p-4">
        <div className="text-[11px] font-semibold uppercase tracking-wide text-sky-400">
          Task / あなたの課題
        </div>
        <p className="mt-2 text-sm leading-7 text-sky-100">
          {question.task}
        </p>
      </section>

      {/* 声に出して答える */}
      {!revealed && (
        <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-5 text-center">
          <div className="text-3xl">🎙️</div>
          <p className="mt-2 text-sm font-medium text-slate-200">
            声に出して答えてみましょう
          </p>
          <p className="mt-1 text-xs leading-6 text-slate-400">
            自分の英語で言ってみてから、模範回答を確認してください。
          </p>
          <button
            onClick={onReveal}
            className="mt-4 w-full rounded-lg bg-sky-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 active:bg-sky-700"
          >
            模範回答を見る
          </button>
        </section>
      )}

      {/* 模範回答 */}
      {revealed && (
        <div className="space-y-4">
          {/* Level 4向け回答例 */}
          <section className="rounded-xl border border-emerald-800/40 bg-emerald-950/20 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-emerald-400">
              Level 4向け回答例
            </div>
            <p className="mt-2 text-sm leading-7 text-emerald-50">
              {question.sampleAnswerLevel4}
            </p>
          </section>

          {/* Level 5向け回答例 */}
          <section className="rounded-xl border border-violet-800/40 bg-violet-950/20 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-violet-400">
              Level 5向け回答例
            </div>
            <p className="mt-2 text-sm leading-7 text-violet-50">
              {question.sampleAnswerLevel5}
            </p>
          </section>

          {/* キーフレーズ */}
          <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Key Phrases / キーフレーズ
            </div>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {question.keyPhrases.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-200"
                >
                  {p}
                </span>
              ))}
            </div>
          </section>

          {/* 自己チェック */}
          <section className="rounded-xl border border-slate-800 bg-slate-900/50 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              Self Check / 自己チェック
            </div>
            <ul className="mt-2.5 space-y-2.5">
              {question.selfCheckItems.map((item, i) => (
                <li key={i}>
                  <button
                    onClick={() => onToggleCheck(i)}
                    className="flex w-full items-start gap-2.5 text-left"
                  >
                    <span
                      className={`mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded border text-[10px] ${
                        checkedItems.has(i)
                          ? 'border-sky-500 bg-sky-500 text-white'
                          : 'border-slate-600 bg-transparent text-transparent'
                      }`}
                    >
                      ✓
                    </span>
                    <span
                      className={`text-sm leading-7 ${
                        checkedItems.has(i) ? 'text-sky-200' : 'text-slate-200'
                      }`}
                    >
                      {item}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </section>

          {/* セーフティノート */}
          {question.safetyNote && (
            <section className="rounded-xl border border-amber-800/40 bg-amber-950/20 p-4">
              <div className="text-[11px] font-semibold uppercase tracking-wide text-amber-400">
                Safety Note / 安全上の留意
              </div>
              <p className="mt-2 text-xs leading-6 text-amber-100/80">
                {question.safetyNote}
              </p>
            </section>
          )}

          {/* 次の問題 / 最終問題なら完了へ */}
          <button
            onClick={onNext}
            className="w-full rounded-lg bg-slate-700 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-600 active:bg-slate-800"
          >
            {isLast ? 'カテゴリを完了する →' : '次の問題へ →'}
          </button>
        </div>
      )}
    </div>
  );
}

/* ---------- 完了画面 ---------- */
function CompleteScreen({
  category,
  total,
  onRestart,
  onBackToCategory,
  onBackToTop,
}: {
  category: Category;
  total: number;
  onRestart: () => void;
  onBackToCategory: () => void;
  onBackToTop: () => void;
}) {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-sky-800/40 bg-sky-950/20 p-6 text-center">
        <div className="text-4xl">🛫</div>
        <h2 className="mt-3 text-lg font-semibold text-slate-100">
          このカテゴリを完了しました
        </h2>
        <div className="mt-1 text-sm font-medium text-sky-300">
          {category.label}
        </div>
        <div className="text-xs text-sky-400/80">{category.labelJa}</div>
        <p className="mt-3 text-sm text-slate-300">
          {total}問練習しました
        </p>
        <p className="mt-3 text-sm leading-7 text-slate-200">
          Good work. Try saying the answers again out loud for better fluency.
        </p>
      </div>

      <div className="space-y-3">
        <button
          onClick={onRestart}
          className="w-full rounded-lg bg-sky-600 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-sky-500 active:bg-sky-700"
        >
          このカテゴリをもう一度
        </button>
        <button
          onClick={onBackToCategory}
          className="w-full rounded-lg bg-slate-700 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-600 active:bg-slate-800"
        >
          カテゴリへ戻る
        </button>
        <button
          onClick={onBackToTop}
          className="w-full rounded-lg border border-slate-700 bg-transparent px-4 py-3.5 text-sm font-semibold text-slate-200 transition hover:bg-slate-900 active:bg-slate-800"
        >
          トップへ戻る
        </button>
      </div>
    </div>
  );
}