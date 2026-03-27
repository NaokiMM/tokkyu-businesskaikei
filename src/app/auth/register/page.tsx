import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-xl">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-8">
        <h1 className="text-4xl font-semibold tracking-tight">会員登録</h1>
        <p className="mt-2 text-sm text-white/75">
          ここでは会員登録フォームを表示します（現在はUIのみ）。
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
            登録する（ダミー）
          </button>
        </div>

        <div className="mt-5 text-sm text-white/75">
          すでにアカウントをお持ちですか？{" "}
          <Link href="/auth/login" className="underline hover:no-underline text-white">
            ログインへ
          </Link>
        </div>
      </div>
    </div>
  );
}
