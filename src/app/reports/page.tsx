import Link from "next/link";
import {
  formatPercent01,
  kpis,
  questions,
  recentAttempts,
  weeklySummaries,
} from "../lib/mockData";

function InfoCard({
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

function WeekBar({
  correctRate,
  targetCorrectRate,
}: {
  correctRate: number;
  targetCorrectRate: number;
}) {
  const heightPx = 120;
  const correctH = Math.round(Math.max(0, Math.min(1, correctRate)) * heightPx);
  const targetH = Math.round(
    Math.max(0, Math.min(1, targetCorrectRate)) * heightPx
  );

  return (
    <div
      className="relative h-[120px] rounded-lg bg-foreground/5 border border-foreground/10 overflow-hidden"
      aria-label="週次正答率バー"
    >
      {/* 正答率（緑の棒） */}
      <div
        className="absolute inset-x-0 bottom-0 bg-emerald-500"
        style={{ height: `${correctH}px` }}
      />

      {/* 目標ライン（薄い水平線） */}
      <div
        className="absolute inset-x-0 bg-foreground/30"
        style={{ bottom: `${heightPx - targetH}px`, height: "2px" }}
      />
    </div>
  );
}

function computeWeakTags() {
  const counts = new Map<string, number>();
  for (const a of recentAttempts) {
    if (a.correct) continue;
    const q = questions.find((qq) => qq.id === a.questionId);
    if (!q) continue;
    counts.set(q.tag, (counts.get(q.tag) ?? 0) + 1);
  }

  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4);
}

export default function ReportsPage() {
  const weakTags = computeWeakTags();
  const currentWeek = weeklySummaries[weeklySummaries.length - 1];
  const currentCorrect = currentWeek?.correctRate ?? 0;
  const targetCorrect = currentWeek?.targetCorrectRate ?? 0.8;
  const deltaPct = Math.round((targetCorrect - currentCorrect) * 100);

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">
          進捗・弱点
        </h1>
        <p className="text-sm text-foreground/70 mt-1">
          週次の正答率と、復習すべきテーマ（UIサンプル）
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <InfoCard
          title="今週の正答率"
          value={formatPercent01(currentCorrect)}
          sub={`目標との差: ${deltaPct}pt（ダミー）`}
        />
        <InfoCard
          title="要復習"
          value={String(kpis.pendingReviewCount)}
          sub="間違えたテーマ中心"
        />
        <InfoCard
          title="直近の正答率"
          value={formatPercent01(kpis.lastAttemptCorrectRate)}
          sub="直近6問（ダミー）"
        />
      </section>

      <section className="overflow-hidden rounded-xl border border-foreground/10 bg-background">
        <div className="p-5 flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="font-semibold">週次の正答率</div>
            <div className="text-sm text-foreground/70 mt-1">
              正答率（緑）と目標（薄色）を比較します
            </div>
          </div>
          <div className="flex gap-2">
            <button
              disabled
              className="inline-flex h-10 items-center justify-center rounded-lg border border-foreground/10 bg-background px-4 text-sm font-medium opacity-60 cursor-not-allowed"
            >
              期間変更（ダミー）
            </button>
            <Link
              href="/accounts"
              className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background hover:opacity-90 transition-opacity"
            >
              学習コンテンツへ
            </Link>
          </div>
        </div>

        <div className="px-5 pb-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {weeklySummaries.map((s) => {
              return (
                <div
                  key={s.weekLabel}
                  className="rounded-lg border border-foreground/10 bg-background p-4"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <div className="font-medium">{s.weekLabel}</div>
                    <div className="text-xs text-foreground/60">
                      回数: {s.practiceCount}
                    </div>
                  </div>
                  <div className="mt-4 space-y-3">
                    <WeekBar
                      correctRate={s.correctRate}
                      targetCorrectRate={s.targetCorrectRate}
                    />
                    <div className="flex items-center justify-between gap-3 text-xs text-foreground/70">
                      <span>正答率: {formatPercent01(s.correctRate)}</span>
                      <span>目標: {formatPercent01(s.targetCorrectRate)}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-foreground/10 bg-background">
          <div className="p-5 border-b border-foreground/10">
            <div className="font-semibold">要復習テーマ</div>
            <div className="text-sm text-foreground/70 mt-1">
              間違えが多いテーマから優先して復習（ダミー）
            </div>
          </div>
          <div className="p-5 space-y-3">
            {weakTags.length === 0 ? (
              <div className="text-sm text-foreground/70">まだありません。</div>
            ) : (
              weakTags.map(([tag, count]) => (
                <div
                  key={tag}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="text-sm text-foreground/80">{tag}</div>
                  <div className="text-xs text-foreground/60">
                    間違い: {count}回
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-foreground/10 bg-background">
          <div className="p-5 border-b border-foreground/10">
            <div className="font-semibold">復習の進め方</div>
            <div className="text-sm text-foreground/70 mt-1">
              UIサンプル（操作はダミー）
            </div>
          </div>
          <div className="p-5 space-y-3">
            <div className="rounded-lg border border-foreground/10 bg-background p-3">
              <div className="text-sm font-medium">1. 間違えた問題を再演習</div>
              <div className="text-sm text-foreground/70 mt-1">
                解説を読んで、同じタグをもう1問。
              </div>
            </div>
            <div className="rounded-lg border border-foreground/10 bg-background p-3">
              <div className="text-sm font-medium">2. レッスンで補強</div>
              <div className="text-sm text-foreground/70 mt-1">
                必要な基礎をレッスンから復習。
              </div>
            </div>
            <div className="rounded-lg border border-foreground/10 bg-background p-3">
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-medium">3. もう一度解いて確認</div>
                <Link
                  href="/accounts"
                  className="text-sm text-foreground/70 hover:text-foreground transition-colors"
                >
                  レッスン一覧 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
