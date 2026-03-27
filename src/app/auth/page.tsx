import Link from "next/link";

export default function AuthSelectPage() {
  return (
    <div className="mx-auto max-w-4xl py-16">
      <div className="rounded-2xl border border-foreground/10 bg-background p-8">
        <h1 className="text-2xl font-semibold tracking-tight">はじめる方法を選択</h1>
        <p className="mt-2 text-sm text-foreground/70">
          会員登録またはログインを選択してください。
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <Link
            href="/auth/register"
            className="rounded-xl border border-foreground/10 bg-background p-5 hover:bg-foreground/5 transition-colors"
          >
            <p className="text-sm text-foreground/60">初めて利用する方</p>
            <p className="mt-1 text-lg font-semibold">会員登録</p>
            <p className="mt-2 text-sm text-foreground/70">
              無料でアカウントを作成して学習を開始
            </p>
          </Link>

          <Link
            href="/auth/login"
            className="rounded-xl border border-foreground/10 bg-background p-5 hover:bg-foreground/5 transition-colors"
          >
            <p className="text-sm text-foreground/60">すでにアカウントをお持ちの方</p>
            <p className="mt-1 text-lg font-semibold">ログイン</p>
            <p className="mt-2 text-sm text-foreground/70">登録済みの情報でログイン</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
