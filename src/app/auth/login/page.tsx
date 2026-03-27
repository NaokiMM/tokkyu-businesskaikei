import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
        <h1 className="text-4xl font-semibold tracking-tight">ログイン</h1>
        <p className="mt-2 text-sm text-white/75">
          メールアドレスとパスワードでログインします（現在はUIのみ）。
        </p>

        <div className="mt-6 space-y-4">
          <input
            disabled
            placeholder="メールアドレス"
            className="h-11 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3 text-sm text-white placeholder:text-white/50 disabled:opacity-70"
          />
          <input
            disabled
            placeholder="パスワード"
            className="h-11 w-full rounded-lg border border-white/15 bg-white/[0.03] px-3 text-sm text-white placeholder:text-white/50 disabled:opacity-70"
          />
          <button
            disabled
            className="inline-flex h-11 w-full items-center justify-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white opacity-70"
          >
            ログインする（ダミー）
          </button>
        </div>

        <div className="mt-5 text-sm text-white/75">
          アカウントをお持ちでないですか？{" "}
          <Link href="/auth/register" className="underline hover:no-underline text-white">
            会員登録へ
          </Link>
        </div>
      </div>
    </div>
  );
}
