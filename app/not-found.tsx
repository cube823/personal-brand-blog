import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-screen items-center py-8">
      <div className="grain-overlay" />
      <section className="glass-panel rise-in w-full max-w-2xl p-8 md:p-10">
        <p className="text-label">404 Not Found</p>
        <h1 className="editorial-title mt-4 text-4xl leading-tight text-[#281f12] md:text-5xl">
          페이지를 찾을 수 없습니다.
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--muted)]">
          주소가 변경되었거나 삭제되었을 수 있습니다.
        </p>
        <Link
          className="mt-7 inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-ink)]"
          href="/"
        >
          홈으로 이동
        </Link>
      </section>
    </main>
  );
}
