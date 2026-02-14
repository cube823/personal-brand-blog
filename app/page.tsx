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
          숫자와 사람 사이의 간격을
          <br />
          작게 만드는 빌더입니다.
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] md:text-lg">
          프로토콜의 메커니즘을 해석하고, 사용자가 실제로 움직일 수 있는 흐름으로 번역합니다.
          불확실한 시장에서는 화려한 설명보다 검증 가능한 실행이 중요하다고 믿습니다.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link className="primary-button" href="/blog">
            기록 보러가기
          </Link>
          <a className="ghost-button" href="mailto:hello@example.com">
            대화하기
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
          <h2 className="text-2xl font-bold tracking-tight text-[#101828] md:text-3xl">
            Case Study: keeper-bot
          </h2>
          <span className="chip">문제-판단-실행-검증</span>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <article className="post-card">
            <div className="card-band" />
            <div className="space-y-3 p-5">
              <p className="text-label">문제</p>
              <p className="text-sm leading-6 text-[var(--muted)]">
                청산 가능 포지션은 짧게 열리고, 감으로 진입하면 수수료만 태우기 쉽습니다.
                시장을 읽는 속도보다 의사결정 구조가 먼저 필요했습니다.
              </p>
            </div>
          </article>
          <article className="post-card">
            <div className="card-band" />
            <div className="space-y-3 p-5">
              <p className="text-label">판단</p>
              <p className="text-sm leading-6 text-[var(--muted)]">
                기회를 찾는 로직과 실행 로직을 분리하고, 포지션 위험도를 티어로 나눠 추적 비용을
                제어했습니다. 핵심은 빠른 반응보다 일관된 기준이었습니다.
              </p>
            </div>
          </article>
          <article className="post-card">
            <div className="card-band" />
            <div className="space-y-3 p-5">
              <p className="text-label">실행</p>
              <p className="text-sm leading-6 text-[var(--muted)]">
                오프체인에서는 수익성 계산과 시뮬레이션을, 온체인에서는 플래시론 기반 청산을
                담당하게 구성해 실패 비용을 낮췄습니다.
              </p>
            </div>
          </article>
          <article className="post-card">
            <div className="card-band" />
            <div className="space-y-3 p-5">
              <p className="text-label">검증</p>
              <p className="text-sm leading-6 text-[var(--muted)]">
                단위 테스트와 포크 통합 테스트 시나리오를 분리해 정상 흐름과 리스크 시나리오를
                모두 확인했습니다. 코드보다 운영 가능성을 먼저 점검했습니다.
              </p>
            </div>
          </article>
        </div>
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
