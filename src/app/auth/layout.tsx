import Link from "next/link";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
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
              トップへ戻る
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-16">{children}</main>
    </div>
  );
}
