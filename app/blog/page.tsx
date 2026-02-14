import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Ethereum Product Builder",
  description: "이더리움, 인문학, 비즈니스 관점으로 정리한 실행 기록",
};

export default function BlogListPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );

  return (
    <main className="page-shell min-h-screen py-8 md:py-14">
      <header className="top-nav rise-in">
        <Link className="text-xl font-extrabold tracking-tight text-[#03c75a]" href="/">
          CUBE NOTE
        </Link>
        <div className="nav-tabs">
          <span className="tab">전체 콘텐츠</span>
          <span className="tab tab-active">이더리움</span>
          <span className="tab">인문학</span>
          <span className="tab">비즈니스</span>
        </div>
      </header>

      <div className="surface rise-in mb-6 p-7 md:mb-8 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="text-label">Archive</p>
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-[#101828] md:text-5xl">
              이더리움, 인문학, 비즈니스 노트
            </h1>
          </div>
          <Link className="chip" href="/">
            홈으로
          </Link>
        </div>
      </div>

      <ul className="space-y-4 md:space-y-5">
        {sorted.map((post, index) => (
          <li
            key={post.slug}
            className="post-card rise-in"
            style={{ animationDelay: `${index * 70 + 120}ms` }}
          >
            <div className="card-band" />
            <div className="p-6">
              <p className="text-xs tracking-wide text-[var(--muted)]">{post.publishedAt}</p>
              <Link
                className="mt-2 block text-2xl font-bold leading-tight text-[#101828] transition-colors hover:text-[var(--accent)] md:text-3xl"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">{post.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
