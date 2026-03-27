"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen flex">
      <aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:border-foreground/10 md:bg-background">
        <div className="px-5 py-5 border-b border-foreground/10">
          <div className="text-lg font-semibold tracking-tight">特急ビジネス会計</div>
          <div className="text-xs text-foreground/70 mt-1">学習サイト</div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavItem href="/accounts" label="学習コンテンツ" />
          <NavItem href="/reports" label="進捗・弱点" />
          <NavItem href="/settings" label="設定" />
        </nav>
        <div className="px-5 py-4 border-t border-foreground/10 text-xs text-foreground/70">
          UIサンプル（学習サイト）
        </div>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="px-6 py-4 border-b border-foreground/10 bg-background">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="text-sm text-foreground/70">特急ビジネス会計</div>
              <div className="text-xl font-semibold tracking-tight">学習体験</div>
            </div>
            <div className="flex items-center gap-3">
              <div className="hidden sm:block text-sm text-foreground/70">
                サンプル商事株式会社
              </div>
              <div className="h-9 w-9 rounded-xl bg-foreground/5 border border-foreground/10" />
            </div>
          </div>
        </header>

        <main className="flex-1 px-6 py-8">{children}</main>
      </div>
    </div>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="block rounded-lg px-3 py-2 text-sm hover:bg-foreground/5 border border-transparent hover:border-foreground/10 transition-colors"
    >
      {label}
    </Link>
  );
}
