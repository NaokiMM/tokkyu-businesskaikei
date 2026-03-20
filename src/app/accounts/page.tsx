import Link from "next/link";
import {
  formatMinutes,
  lessons,
  type Lesson,
  type LessonLevel,
} from "../lib/mockData";

function LevelBadge({ level }: { level: LessonLevel }) {
  const cls =
    level === "上級"
      ? "bg-violet-500/10 text-violet-700 border-violet-500/20"
      : level === "中級"
        ? "bg-amber-500/10 text-amber-700 border-amber-500/20"
        : "bg-emerald-500/10 text-emerald-700 border-emerald-500/20";

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs border ${cls}`}
    >
      {level}
    </span>
  );
}

function ProgressBar({ value }: { value: number }) {
  const pct = Math.max(0, Math.min(100, value));
  return (
    <div className="h-2.5 w-full rounded-full bg-foreground/10 overflow-hidden border border-foreground/10">
      <div
        className="h-full bg-foreground"
        style={{ width: `${pct}%` }}
        aria-label={`進捗 ${pct}%`}
      />
    </div>
  );
}

function LessonCard({ lesson }: { lesson: Lesson }) {
  return (
    <div className="rounded-xl border border-foreground/10 bg-background p-5 space-y-4">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold">{lesson.title}</div>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            <LevelBadge level={lesson.level} />
            <span className="text-xs text-foreground/60">
              {formatMinutes(lesson.estimatedMin)}
            </span>
          </div>
        </div>
        <div className="text-xs text-foreground/60 whitespace-nowrap">
          更新: {lesson.updatedAt}
        </div>
      </div>

      <div className="text-sm text-foreground/70">{lesson.summary}</div>

      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <div className="text-xs text-foreground/70">進捗</div>
          <div className="text-xs text-foreground/60">{lesson.progressPct}%</div>
        </div>
        <ProgressBar value={lesson.progressPct} />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {lesson.topics.slice(0, 3).map((t) => (
          <span
            key={t}
            className="inline-flex items-center rounded-full border border-foreground/10 bg-background px-2.5 py-0.5 text-xs text-foreground/70"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="/transactions"
          className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background hover:opacity-90 transition-opacity flex-1"
        >
          このレッスンで演習
        </Link>
      </div>
    </div>
  );
}

export default function AccountsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">
          学習コンテンツ
        </h1>
        <p className="text-sm text-foreground/70 mt-1">
          レッスンを進めて、問題演習で定着させる（UIサンプル）
        </p>
      </section>

      <section className="flex items-center justify-between gap-4 flex-wrap">
        <div className="flex-1 min-w-[280px]">
          <label className="text-sm text-foreground/70">キーワード（ダミー）</label>
          <input
            disabled
            placeholder="例：財務諸表"
            className="mt-2 w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
          />
        </div>
        <div className="flex gap-2">
          <Link
            href="/transactions"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-foreground/10 bg-background px-4 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            問題演習へ
          </Link>
          <button
            disabled
            className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background opacity-60 cursor-not-allowed"
          >
            レッスンを追加（ダミー）
          </button>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {lessons.map((l) => (
          <LessonCard key={l.id} lesson={l} />
        ))}
      </section>
    </div>
  );
}

