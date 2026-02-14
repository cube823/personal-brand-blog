import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Page() {
  const latestPosts = [...posts]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <main className="page-shell min-h-screen py-8 md:py-14">
      <div className="grain-overlay" />

      <section className="glass-panel rise-in relative overflow-hidden p-7 md:p-12">
        <div className="absolute -right-6 -top-8 h-36 w-36 rounded-full bg-orange-200/70 blur-2xl" />
        <div className="absolute -bottom-9 right-20 h-20 w-20 rounded-full bg-blue-200/60 blur-2xl" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <p className="text-label flex items-center gap-2">
            <span className="accent-dot" /> Personal Studio
          </p>
          <h1 className="editorial-title text-5xl leading-tight tracking-tight text-[var(--panel-ink)] md:text-7xl">
            제품의 언어로
            <br />
            기술을 설계합니다.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            전략, UX, 프런트엔드 구현까지 연결해 실제로 동작하는 경험을 만듭니다.
            개인 사이트에는 케이스 스터디를, 블로그에는 의사결정의 근거와 실험 기록을 남깁니다.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-ink)] transition-transform duration-300 hover:-translate-y-0.5"
              href="/blog"
            >
              아카이브 보기
            </Link>
            <a
              className="rounded-full border border-[var(--border)] bg-[#fffaf2]/85 px-6 py-3 text-sm font-semibold text-[#4e4430] transition-transform duration-300 hover:-translate-y-0.5"
              href="mailto:hello@example.com"
            >
              프로젝트 문의
            </a>
          </div>
        </div>
      </section>

      <section className="mt-8 space-y-4 md:mt-10">
        <div className="flex items-center justify-between">
          <h2 className="editorial-title text-3xl text-[#272117] md:text-4xl">Recent Notes</h2>
          <Link className="cta-chip transition-colors hover:bg-[#f4ead6]" href="/blog">
            전체 글 보기
          </Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <li
              key={post.slug}
              className="glass-panel rise-in group p-5 transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 90 + 140}ms` }}
            >
              <p className="text-xs tracking-wide text-[var(--muted)]">{post.publishedAt}</p>
              <Link
                className="editorial-title mt-3 block text-xl leading-tight text-[#2b2318] transition-colors group-hover:text-[var(--accent)]"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
