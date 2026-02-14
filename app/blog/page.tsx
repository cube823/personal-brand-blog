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
      <div className="grain-overlay" />

      <div className="glass-panel rise-in mb-8 p-7 md:mb-10 md:p-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-label">Archive</p>
            <h1 className="editorial-title mt-3 text-5xl leading-none text-[#281f12] md:text-6xl">
              Ethereum Notes
            </h1>
          </div>
          <Link className="cta-chip transition-colors hover:bg-[#f4ead6]" href="/">
            홈으로
          </Link>
        </div>
      </div>

      <ul className="space-y-4 md:space-y-5">
        {sorted.map((post, index) => (
          <li
            key={post.slug}
            className="glass-panel rise-in group p-6 transition-transform duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 70 + 120}ms` }}
          >
            <p className="text-xs tracking-wide text-[var(--muted)]">{post.publishedAt}</p>
            <Link
              className="editorial-title mt-2 block text-3xl leading-tight text-[#2c2317] transition-colors group-hover:text-[var(--accent)]"
              href={`/blog/${post.slug}`}
            >
              {post.title}
            </Link>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--muted)]">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
