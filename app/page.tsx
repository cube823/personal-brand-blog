import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Page() {
  const latestPosts = [...posts]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <main className="page-shell min-h-screen py-8 md:py-14">
      <header className="top-nav rise-in">
        <Link className="text-xl font-extrabold tracking-tight text-[#03c75a]" href="/">
          CUBE NOTE
        </Link>
        <div className="nav-tabs">
          <span className="tab tab-active">전체 콘텐츠</span>
          <span className="tab">이더리움</span>
          <span className="tab">인문학</span>
          <span className="tab">비즈니스</span>
        </div>
      </header>

      <section className="surface rise-in p-7 md:p-10">
        <p className="text-label">Personal Brief</p>
        <h1 className="display-title mt-3 text-4xl text-[#101828] md:text-6xl">
          경영학과 인문학 베이스로
          <br />
          이더리움 제품을 설계합니다.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
          AI 시대에 개발자의 창의력과 실행력을 증명하는 방법을 기록합니다. 기술을 기술로 끝내지
          않고, 사람과 시장의 맥락까지 제품에 반영하는 것이 목표입니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="primary-button" href="/blog">
            아티클 보기
          </Link>
          <a className="ghost-button" href="mailto:hello@example.com">
            함께 만들기
          </a>
        </div>
      </section>

      <section className="rise-in mt-6 md:mt-8">
        <input
          className="search-box"
          type="text"
          readOnly
          value="관심 주제를 찾아보세요: 온보딩, 신뢰, 실행 루프..."
          aria-label="search"
        />
      </section>

      <section className="mt-6 space-y-4 md:mt-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold tracking-tight text-[#101828] md:text-3xl">최근 발행 글</h2>
          <Link className="chip" href="/blog">
            전체 글 보기
          </Link>
        </div>
        <ul className="grid gap-4 md:grid-cols-3">
          {latestPosts.map((post, index) => (
            <li
              key={post.slug}
              className="post-card rise-in"
              style={{ animationDelay: `${index * 90 + 140}ms` }}
            >
              <div className="card-band" />
              <div className="p-5">
              <p className="text-xs tracking-wide text-[var(--muted)]">{post.publishedAt}</p>
              <Link
                className="mt-3 block text-xl font-semibold leading-tight text-[#101828] transition-colors hover:text-[var(--accent)]"
                href={`/blog/${post.slug}`}
              >
                {post.title}
              </Link>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{post.summary}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
