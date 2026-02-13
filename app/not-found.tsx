import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col items-start justify-center gap-4 px-6">
      <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">404</p>
      <h1 className="text-3xl font-semibold text-zinc-900">페이지를 찾을 수 없습니다.</h1>
      <p className="text-zinc-600">주소가 잘못되었거나 삭제된 페이지일 수 있습니다.</p>
      <Link className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white" href="/">
        홈으로 이동
      </Link>
    </main>
  );
}
