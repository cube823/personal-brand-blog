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
            <span className="accent-dot" /> Ethereum Product Builder
          </p>
          <h1 className="editorial-title text-5xl leading-tight tracking-tight text-[var(--panel-ink)] md:text-7xl">
            이더리움의 가능성을,
            <br />
            사람이 쓰는 제품으로 바꿉니다.
          </h1>
          <p className="max-w-2xl text-base leading-8 text-[var(--muted)] md:text-lg">
            경영학과 인문학 기반의 프런트엔드 개발자로서, AI 시대에 필요한 창의력과 실행력을
            무기로 제품을 만듭니다. 기술 설명에 그치지 않고 사람과 비즈니스 맥락까지 연결합니다.
          </p>
          <div className="flex flex-wrap gap-3 pt-3">
            <Link
              className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--accent-ink)] transition-transform duration-300 hover:-translate-y-0.5"
              href="/blog"
            >
              아티클 보기
            </Link>
            <a
              className="rounded-full border border-[var(--border)] bg-[#fffaf2]/85 px-6 py-3 text-sm font-semibold text-[#4e4430] transition-transform duration-300 hover:-translate-y-0.5"
              href="mailto:hello@example.com"
            >
              함께 만들기
            </a>
          </div>
        </div>
      </section>

      <section className="glass-panel rise-in mt-8 space-y-6 p-7 md:mt-10 md:p-10">
        <p className="text-label">About</p>
        <h2 className="editorial-title text-3xl leading-tight text-[#272117] md:text-4xl">
          기술만 말하지 않고, 신뢰와 맥락까지 설계합니다.
        </h2>
        <p className="max-w-3xl text-base leading-8 text-[var(--muted)]">
          5년 동안 프런트엔드 개발자로 일하며 화려한 타이틀보다 끝까지 문제를 해결하는 태도를
          선택해왔습니다. 사교성, 근성, 팀플레이를 기반으로 불확실한 과제를 실행 가능한 결과로
          바꾸는 것이 강점입니다.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Ethereum", "Humanities", "Business", "Execution", "Team Play"].map((item) => (
            <span key={item} className="cta-chip">
              {item}
            </span>
          ))}
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
