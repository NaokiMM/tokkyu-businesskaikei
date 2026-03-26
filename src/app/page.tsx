import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[linear-gradient(120deg,#071b47_0%,#081736_45%,#0f274e_100%)] text-white">
      <header className="border-b border-white/10">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-b from-sky-400 to-blue-600 shadow-lg" />
            <div className="text-xl font-semibold tracking-tight">特急ビジネス会計</div>
          </div>
          <div className="flex items-center gap-6 text-sm">
            <button className="rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 text-white/90">
              JP
            </button>
            <Link href="/settings" className="text-white/80 hover:text-white transition-colors">
              マイページ
            </Link>
            <Link href="/dashboard" className="text-white/80 hover:text-white transition-colors">
              ログイン
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col items-center px-6 py-16 text-center">
        <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
          ビジネス会計に特化した
          <br />
          <span className="text-blue-400">AI学習サービス</span>
        </h1>

        <div className="mt-12 flex h-56 w-56 items-center justify-center rounded-[2rem] border border-white/10 bg-white/[0.04] shadow-2xl">
          <div className="text-7xl" aria-hidden="true">
            🤖
          </div>
        </div>

        <p className="mt-10 max-w-3xl text-xl leading-relaxed text-white/75">
          ビジネス会計検定の学習を、AI相手にいつでも練習できます。
          <br />
          学習コンテンツと問題演習を行き来しながら、短時間で実力を伸ばせます。
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/dashboard"
            className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-500 px-8 text-base font-semibold text-white shadow-lg shadow-blue-900/40 hover:bg-blue-400 transition-colors"
          >
            無料ではじめる
          </Link>
          <Link
            href="/transactions"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 text-base font-semibold text-white/90 hover:bg-white/10 transition-colors"
          >
            問題演習を試す
          </Link>
        </div>
      </main>
    </div>
  );
}
