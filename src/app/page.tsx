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
            <Link href="/" className="text-white/80 hover:text-white transition-colors">
              マイページ
            </Link>
            <Link href="/auth/login" className="text-white/80 hover:text-white transition-colors">
              ログイン
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-16">
        <section className="flex flex-col items-center text-center">
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
            世の中に存在する唯一のビジネス会計検定に特化した、Web学習サイトです。
            <br />
            インプット学習と確認問題を行き来しながら、短時間で実力を伸ばせます。
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              href="/auth"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-500 px-8 text-base font-semibold text-white shadow-lg shadow-blue-900/40 hover:bg-blue-400 transition-colors"
            >
              無料ではじめる
            </Link>
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/25 bg-white/5 px-8 text-base font-semibold text-white/90 hover:bg-white/10 transition-colors"
            >
              サービスを見る
            </Link>
          </div>
        </section>

        <section className="mt-20 grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold tracking-widest text-blue-300">FEATURE 01</p>
            <h2 className="mt-3 text-lg font-semibold">検定特化の学習設計</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              ビジネス会計検定の出題テーマに沿って、基礎理解から演習までを一気通貫で進められます。
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold tracking-widest text-blue-300">FEATURE 02</p>
            <h2 className="mt-3 text-lg font-semibold">AIで即フィードバック</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              確認問題の結果をもとに、理解が浅いテーマを可視化。次に取り組むべき学習を迷わず選べます。
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="text-xs font-semibold tracking-widest text-blue-300">FEATURE 03</p>
            <h2 className="mt-3 text-lg font-semibold">短時間でも継続しやすい</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75">
              1回あたりの学習量を小さく設計。忙しい日でも積み上げられるように、導線をシンプルにしています。
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-300">FOR YOU</p>
            <h2 className="mt-3 text-2xl font-semibold">こんな方におすすめ</h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
              <li>・ビジネス会計検定の学習を何から始めるべきか迷っている方</li>
              <li>・独学で進めているが、演習と復習のサイクルを作りたい方</li>
              <li>・限られた時間で効率よく得点力を上げたい方</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-300">FLOW</p>
            <h2 className="mt-3 text-2xl font-semibold">学習の進め方</h2>
            <ol className="mt-4 space-y-3 text-sm leading-relaxed text-white/80">
              <li>1. インプット学習で論点を理解する</li>
              <li>2. 確認問題でアウトプットして定着させる</li>
              <li>3. 学習方針を確認し、次の学習を決める</li>
            </ol>
          </div>
        </section>

        <section className="mt-16 mb-8 rounded-2xl border border-blue-300/30 bg-blue-500/10 p-8 text-center">
          <h2 className="text-2xl font-semibold">まずは今日の学習を始めましょう</h2>
          <p className="mt-3 text-sm text-white/80">
            トップから開始して、最短ルートで学習を進められます。
          </p>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-500 px-8 text-base font-semibold text-white shadow-lg shadow-blue-900/40 hover:bg-blue-400 transition-colors"
            >
              学習を始める
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
