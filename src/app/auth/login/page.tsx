import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl py-16">
      <div className="rounded-2xl border border-foreground/10 bg-background p-8">
        <h1 className="text-2xl font-semibold tracking-tight">ログイン</h1>
        <p className="mt-2 text-sm text-foreground/70">
          メールアドレスとパスワードでログインします（現在はUIのみ）。
        </p>

        <div className="mt-6 space-y-4">
          <input
            disabled
            placeholder="メールアドレス"
            className="h-11 w-full rounded-lg border border-foreground/10 bg-background px-3 text-sm disabled:opacity-60"
          />
          <input
            disabled
            placeholder="パスワード"
            className="h-11 w-full rounded-lg border border-foreground/10 bg-background px-3 text-sm disabled:opacity-60"
          />
          <button
            disabled
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background opacity-60"
          >
            ログインする（ダミー）
          </button>
        </div>

        <div className="mt-5 text-sm text-foreground/70">
          アカウントをお持ちでないですか？{" "}
          <Link href="/auth/register" className="underline hover:no-underline">
            会員登録へ
          </Link>
        </div>
      </div>
    </div>
  );
}
