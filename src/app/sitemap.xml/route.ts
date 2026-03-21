import { headers } from "next/headers";
import { NextResponse } from "next/server";

/** ビルド時に localhost が焼き付かないよう、リクエストごとに生成する */
export const dynamic = "force-dynamic";

function canonicalSiteUrlFromEnv(): string | undefined {
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
}

async function baseUrlFromRequest(): Promise<string | undefined> {
  const h = await headers();
  const host =
    h.get("x-forwarded-host")?.split(",")[0]?.trim() ?? h.get("host")?.trim();
  if (!host) return undefined;

  const forwardedProto = h.get("x-forwarded-proto")?.split(",")[0]?.trim();
  const proto =
    forwardedProto === "http" || forwardedProto === "https"
      ? forwardedProto
      : host.startsWith("localhost") || host.startsWith("127.")
        ? "http"
        : "https";

  return `${proto}://${host}`.replace(/\/$/, "");
}

async function resolveBaseUrl(): Promise<string> {
  const vercel =
    process.env.VERCEL_URL != null
      ? `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`
      : undefined;

  return (
    canonicalSiteUrlFromEnv() ??
    (await baseUrlFromRequest()) ??
    vercel ??
    "http://localhost:3000"
  );
}

/** 当面はトップのみ（必要になったらパスを追加） */
const paths: string[] = ["/"];

function escapeXml(s: string): string {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export async function GET() {
  const root = await resolveBaseUrl();
  const lastmod = new Date().toISOString().slice(0, 10);

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...paths.map((path) => {
      const loc = path === "/" ? root : `${root}${path}`;
      return `  <url><loc>${escapeXml(loc)}</loc><lastmod>${lastmod}</lastmod></url>`;
    }),
    "</urlset>",
  ].join("\n");

  return new NextResponse(body, {
    status: 200,
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
