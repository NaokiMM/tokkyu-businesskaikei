import Link from "next/link";
import {
  formatMinutes,
  formatPercent01,
  kpis,
  lessons,
  questions,
  recentAttempts,
} from "../lib/mockData";

function ResultPill({ correct }: { correct: boolean }) {
  const cls = correct
    ? "bg-emerald-500/10 text-emerald-700 border-emerald-500/20"
    : "bg-rose-500/10 text-rose-700 border-rose-500/20";
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs border ${cls}`}
    >
      {correct ? "正解" : "不正解"}
    </span>
  );
}

function findQuestion(id: string) {
  return questions.find((q) => q.id === id);
}

function StatCard({
  title,
  value,
  sub,
}: {
  title: string;
  value: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-foreground/10 bg-background p-4">
      <div className="text-sm text-foreground/70">{title}</div>
      <div className="mt-2 text-2xl font-semibold tracking-tight">{value}</div>
      <div className="mt-3 text-xs text-foreground/60">{sub}</div>
    </div>
  );
}

function ActionCard({
  title,
  description,
  href,
  cta,
}: {
  title: string;
  description: string;
  href: string;
  cta: string;
}) {
  return (
    <div className="rounded-xl border border-foreground/10 bg-background p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-foreground/70 mt-1">{description}</div>
        </div>
        <div className="text-sm text-foreground/60">{cta}</div>
      </div>
      <div className="mt-4">
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-lg bg-foreground px-3.5 py-2 text-sm font-medium text-background hover:opacity-90 transition-opacity"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const recent = recentAttempts.slice(0, 6);
  const nextLesson =
    lessons.find((l) => l.title === kpis.nextLessonTitle) ??
    lessons.find((l) => l.title.includes(kpis.nextLessonTitle)) ??
    lessons[0];

  return (
    <div className="space-y-8">
      <section>
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">
              学習ダッシュボード
            </h1>
            <p className="text-sm text-foreground/70 mt-1">
              今日の学習状況と、復習・次の一歩（UIサンプル）
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/transactions"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              問題演習へ
            </Link>
            <Link
              href="/reports"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-foreground/10 bg-background px-4 text-sm font-medium hover:bg-foreground/5 transition-colors"
            >
              進捗・弱点
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-4">
        <StatCard
          title="今日の学習時間"
          value={formatMinutes(kpis.todayMinutes)}
          sub="学習ログ（ダミー）"
        />
        <StatCard
          title="今週の正答率"
          value={formatPercent01(kpis.weekCorrectRate)}
          sub="直近7日（ダミー）"
        />
        <StatCard
          title="完了レッスン"
          value={`${kpis.completedLessons}/${kpis.totalLessons}`}
          sub="学習コンテンツ"
        />
        <StatCard
          title="要復習"
          value={String(kpis.pendingReviewCount)}
          sub="苦手問題（ダミー）"
        />
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-base font-semibold">最近の解答</h2>
          <Link
            href="/transactions"
            className="text-sm text-foreground/70 hover:text-foreground transition-colors"
          >
            問題一覧へ →
          </Link>
        </div>

        <div className="overflow-hidden rounded-xl border border-foreground/10 bg-background">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-foreground/5">
                <tr className="text-left">
                  <th className="px-4 py-3 font-medium text-foreground/70">日付</th>
                  <th className="px-4 py-3 font-medium text-foreground/70">問題</th>
                  <th className="px-4 py-3 font-medium text-foreground/70">テーマ</th>
                  <th className="px-4 py-3 font-medium text-foreground/70">結果</th>
                </tr>
              </thead>
              <tbody>
                {recent.map((a) => {
                  const q = findQuestion(a.questionId);
                  return (
                    <tr key={a.id} className="border-t border-foreground/5">
                      <td className="px-4 py-3 whitespace-nowrap">{a.date}</td>
                      <td className="px-4 py-3">
                        <div className="font-medium">{q?.numberLabel ?? "—"}</div>
                        <div className="text-xs text-foreground/60 mt-1">
                          {q?.level ?? ""}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-foreground/80">{q?.tag ?? "—"}</td>
                      <td className="px-4 py-3">
                        <ResultPill correct={a.correct} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <ActionCard
          title="次の学習"
          description={`${nextLesson.title}（${kpis.nextLessonDueLabel}）`}
          href="/accounts"
          cta="学習コンテンツへ"
        />
        <ActionCard
          title="弱点テーマの復習"
          description="要復習の問題を中心に短時間で立て直します（ダミー）"
          href="/reports"
          cta="進捗を見る"
        />
        <ActionCard
          title="今日の問題演習"
          description="まずは直近のテーマから1問ずつ（ダミー）"
          href="/transactions"
          cta="問題演習"
        />
      </section>
    </div>
  );
}

