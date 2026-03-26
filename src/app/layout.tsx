import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Link from "next/link";

const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "特急ビジネス会計",
    template: "%s | 特急ビジネス会計",
  },
  description: "特急ビジネス会計の学習・問題演習サイト（UIサンプル）",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground flex flex-col">
        {gaMeasurementId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaMeasurementId}');
              `}
            </Script>
          </>
        ) : null}
        <div className="min-h-screen flex">
          <aside className="hidden md:flex md:w-64 md:flex-col md:border-r md:border-foreground/10 md:bg-background">
            <div className="px-5 py-5 border-b border-foreground/10">
              <div className="text-lg font-semibold tracking-tight">
                特急ビジネス会計
              </div>
              <div className="text-xs text-foreground/70 mt-1">
                学習・問題演習
              </div>
            </div>
            <nav className="flex-1 px-3 py-4 space-y-1">
              <NavItem
                href="/dashboard"
                label="学習ダッシュボード"
              />
              <NavItem href="/transactions" label="問題演習" />
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
                  <div className="text-sm text-foreground/70">
                    特急ビジネス会計
                  </div>
                  <div className="text-xl font-semibold tracking-tight">
                    学習体験
                  </div>
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
      </body>
    </html>
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
