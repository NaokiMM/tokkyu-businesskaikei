// /sitemap.xml というURLにアクセスされたときに、route.ts がXMLを返す仕組みです。
import { headers } from "next/headers";
import { NextResponse } from "next/server";

/** ビルド時に localhost が焼き付かないよう、リクエストごとに生成する */
// 毎回リクエストごとに生成する（ビルド時に固定されない）
export const dynamic = "force-dynamic";

// 環境変数からサイトURLを取得
function canonicalSiteUrlFromEnv(): string | undefined {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
}

// リクエストヘッダーからドメインを取得（本番URL用）
async function baseUrlFromRequest(): Promise<string | undefined> {
  const h = await headers();

  // host取得（CloudFrontなども考慮）
  const host =
    h.get("x-forwarded-host")?.split(",")[0]?.trim() ?? h.get("host")?.trim();
  if (!host) return undefined;

  // http or https 判定
  const forwardedProto = h.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto =
    forwardedProto === "http" || forwardedProto === "https"
      ? forwardedProto
      : host.startsWith("localhost") || host.startsWith("127.")
        ? "http"
        : "https";

  return `${proto}://${host}`.replace(/\/$/, "");
}

// 最終的なベースURLを決定
async function resolveBaseUrl(): Promise<string> {
  const vercel =
    process.env.VERCEL_URL != null
      ? `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
      : undefined;

  return (
    canonicalSiteUrlFromEnv() ??   // 優先：環境変数
    (await baseUrlFromRequest()) ?? // 次：リクエスト
    vercel ??                      // 次：Vercel
    "http://localhost:3000"        // 最後：ローカル
  );
}

/**
 * 検索エンジンに認識させたい公開ページ一覧
 * ※ログイン後ページや管理画面は入れない
 */
const paths: string[] = [
  "/",
  // "/about",
  // "/contact",
];

// XMLエスケープ処理
function escapeXml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

// GETリクエスト時にsitemap.xmlを生成
export async function GET() {
  const root = await resolveBaseUrl();

  // 最終更新日（今日）
  const lastmod = new Date().toISOString().slice(0, 10);

  // XML構築
  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => {
      const loc = path === "/" ? root : `${root}${path}`;
      return `  <url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod></url>`;
    }),
    "</urlset>",
  ].join("\n");

  // XMLとして返す
  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
