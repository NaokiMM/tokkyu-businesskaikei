import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-xl py-16">
      <div className="rounded-2xl border border-foreground/10 bg-background p-8">
        <h1 className="text-2xl font-semibold tracking-tight">会員登録</h1>
        <p className="mt-2 text-sm text-foreground/70">
          ここでは会員登録フォームを表示します（現在はUIのみ）。
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
            登録する（ダミー）
          </button>
        </div>

        <div className="mt-5 text-sm text-foreground/70">
          すでにアカウントをお持ちですか？{" "}
          <Link href="/auth/login" className="underline hover:no-underline">
            ログインへ
          </Link>
        </div>
      </div>
    </div>
  );
}
