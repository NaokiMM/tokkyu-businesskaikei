import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-2xl font-semibold tracking-tight">設定</h1>
        <p className="text-sm text-foreground/70 mt-1">
          学習環境と復習のカスタマイズ（UIサンプル）
        </p>
      </section>

      <section className="overflow-hidden rounded-xl border border-foreground/10 bg-background">
        <div className="p-5 border-b border-foreground/10">
          <div className="font-semibold">学習設定</div>
          <div className="text-sm text-foreground/70 mt-1">
            入力はダミーです
          </div>
        </div>

        <div className="p-5 grid gap-4 md:grid-cols-2">
          <Field label="受験予定（ダミー）">
            <select
              disabled
              className="w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
              defaultValue="初級"
            >
              <option value="初級">初級</option>
              <option value="中級">中級</option>
              <option value="上級">上級</option>
            </select>
          </Field>

          <Field label="学習目標（ダミー）">
            <input
              disabled
              value="2週間で弱点を改善"
              className="w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
            />
          </Field>

          <Field label="復習リマインド（ダミー）">
            <select
              disabled
              className="w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
              defaultValue="毎日"
            >
              <option value="毎日">毎日</option>
              <option value="隔日">隔日</option>
              <option value="週1">週1</option>
            </select>
          </Field>

          <Field label="表示テーマ（ダミー）">
            <select
              disabled
              className="w-full h-11 rounded-lg border border-foreground/10 bg-background px-3 text-sm outline-none disabled:opacity-60"
              defaultValue="システム"
            >
              <option value="システム">システム</option>
              <option value="ライト">ライト</option>
              <option value="ダーク">ダーク</option>
            </select>
          </Field>
        </div>

        <div className="p-5 flex items-center justify-end gap-3 border-t border-foreground/10">
          <Link
            href="/accounts"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-foreground/10 bg-background px-4 text-sm font-medium hover:bg-foreground/5 transition-colors"
          >
            戻る
          </Link>
          <button
            disabled
            className="inline-flex h-10 items-center justify-center rounded-lg bg-foreground px-4 text-sm font-medium text-background opacity-60 cursor-not-allowed"
          >
            保存（ダミー）
          </button>
        </div>
      </section>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="text-sm text-foreground/70 mb-2">{label}</div>
      {children}
    </div>
  );
}

