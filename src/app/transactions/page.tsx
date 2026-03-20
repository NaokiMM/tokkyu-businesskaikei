import Link from "next/link";
import {
  questions,
  type LessonLevel,
  type Question,
} from "../lib/mockData";

function LevelBadge({ level }: { level: LessonLevel }) {
  const cls =
    level === "上級"
      ? "bg-violet-500/10 text-violet-700 border-violet-500/20"
      : level === "中級"
        ? "bg-amber-500/10 text-amber-700 border-amber-500/20"
        : "bg-emerald-500/10 text-emerald-700 border-emerald-500/20";

  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs border ${cls}`}>
      {level}
    </span>
  );
}

function TagPill({ tag }: { tag: Question["tag"] }) {
  const cls = "bg-foreground/5 border border-foreground/10 text-foreground/80";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ${cls}`}>
      {tag}
    </span>
  );
}

function OptionList({
  options,
  answerIndex,
}: {
  options: string[];
  answerIndex: number;
}) {
  return (
    <ul className="space-y-2">
      {options.map((opt, idx) => {
        const isAnswer = idx === answerIndex;
        return (
          <li
            key={idx}
            className={`rounded-lg border px-3 py-2 text-sm ${
              isAnswer
                ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-800"
                : "border-foreground/10 bg-background text-foreground/80"
            }`}
          >
            <span className="font-medium">{String.fromCharCode(65 + idx)}.</span>{" "}
            {opt}
          </li>
        );
      })}
    </ul>
  );
}

export default function TransactionsPage() {
  const current = questions[0];
  return (
    <div className="space-y-8">
      <section className="space-y-2">
        <h1 className="text-2xl font-semibold tracking-tight">問題演習</h1>
        <p className="text-sm text-foreground/70">
          テーマ別に解いて、解説で復習する（UIサンプル）
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <div className="md:col-span-1">
          <label className="text-sm text-foreground/70">テーマ（ダミー）</label>
          <input
            disabled
            placeholder="財務諸表"
            className="mt-2 w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
          />
        </div>
        <div className="md:col-span-1">
          <label className="text-sm text-foreground/70">難易度（ダミー）</label>
          <select
            disabled
            className="mt-2 w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
            defaultValue=""
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="初級">初級</option>
            <option value="中級">中級</option>
            <option value="上級">上級</option>
          </select>
        </div>
        <div className="md:col-span-1">
          <label className="text-sm text-foreground/70">出題形式（ダミー）</label>
          <input
            disabled
            placeholder="四択"
            className="mt-2 w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
          />
        </div>
        <div className="md:col-span-1">
          <label className="text-sm text-foreground/70">復習モード（ダミー）</label>
          <select
            disabled
            className="mt-2 w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
            defaultValue=""
          >
            <option value="" disabled>
              選択してください
            </option>
            <option value="通常">通常</option>
            <option value="弱点中心">弱点中心</option>
          </select>
        </div>
      </section>

      <section className="flex items-center justify-between gap-4 flex-wrap">
        <div className="text-sm text-foreground/70">
          表示件数:{" "}
          <span className="text-foreground font-medium">{questions.length}</span>
        </div>
        <div className="flex gap-2">
          <Link
            href="/accounts"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-foreground/10 bg-background px-4 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            学習コンテンツへ
          </Link>
          <button
            disabled
            className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background opacity-60 cursor-not-allowed"
          >
            演習を開始（ダミー）
          </button>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-foreground/10 bg-background">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-foreground/5">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-foreground/70">問題</th>
                <th className="px-4 py-3 font-medium text-foreground/70">テーマ</th>
                <th className="px-4 py-3 font-medium text-foreground/70">難易度</th>
                <th className="px-4 py-3 font-medium text-foreground/70">出題文</th>
                <th className="px-4 py-3 font-medium text-foreground/70">操作</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q) => (
                <tr key={q.id} className="border-t border-foreground/5">
                  <td className="px-4 py-3 whitespace-nowrap font-medium">
                    {q.numberLabel}
                  </td>
                  <td className="px-4 py-3">
                    <TagPill tag={q.tag} />
                  </td>
                  <td className="px-4 py-3">
                    <LevelBadge level={q.level} />
                  </td>
                  <td className="px-4 py-3 text-foreground/80">
                    <div className="max-w-[420px] truncate">{q.prompt}</div>
                  </td>
                  <td className="px-4 py-3">
                    <button
                      disabled
                      className="rounded-lg border border-foreground/10 bg-background px-3 py-1.5 text-xs opacity-60 cursor-not-allowed"
                    >
                      解答する（ダミー）
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="overflow-hidden rounded-xl border border-foreground/10 bg-background">
        <div className="p-5 border-b border-foreground/10 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="font-semibold">出題例（ダミー）</div>
            <div className="text-sm text-foreground/70 mt-1">
              {current.numberLabel} / {current.tag} / {current.level}
            </div>
          </div>
          <div className="text-sm text-foreground/60">
            解説と選択肢はサンプル表示
          </div>
        </div>
        <div className="p-5 space-y-4">
          <div className="text-sm">
            <div className="font-medium">問題文</div>
            <div className="mt-2 rounded-lg border border-foreground/10 bg-background px-4 py-3 text-foreground/90">
              {current.prompt}
            </div>
          </div>
          <div>
            <div className="font-medium text-sm">選択肢</div>
            <div className="mt-3">
              <OptionList
                options={current.options}
                answerIndex={current.answerIndex}
              />
            </div>
          </div>
          <div className="text-sm">
            <div className="font-medium">解説</div>
            <div className="mt-2 rounded-lg bg-foreground/5 border border-foreground/10 px-4 py-3 text-foreground/80">
              {current.explanation}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
