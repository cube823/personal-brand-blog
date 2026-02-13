import Link from "next/link";
import { posts } from "@/lib/posts";

export default function Page() {
  const latestPosts = [...posts]
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt))
    .slice(0, 3);

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col gap-10 px-6 py-16">
      <section className="space-y-4">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Brand Site</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">
          안녕하세요, 저는 제품과 기술을 연결하는 개발자입니다.
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600">
          이 사이트는 개인 브랜딩과 기술 글 정리를 위한 공간입니다. 메인 도메인에는 소개와
          포트폴리오를, 서브도메인에는 블로그를 운영하는 구조를 기준으로 만들었습니다.
        </p>
        <div className="flex gap-4">
          <Link className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white" href="/blog">
            블로그 보러가기
          </Link>
          <a
            className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700"
            href="mailto:hello@example.com"
          >
            연락하기
          </a>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-zinc-900">최근 글</h2>
          <Link className="text-sm text-zinc-600 underline underline-offset-4" href="/blog">
            전체 보기
          </Link>
        </div>
        <ul className="space-y-3">
          {latestPosts.map((post) => (
            <li key={post.slug} className="rounded-xl border border-zinc-200 p-4">
              <p className="text-xs text-zinc-500">{post.publishedAt}</p>
              <Link className="mt-1 block text-lg font-medium text-zinc-900" href={`/blog/${post.slug}`}>
                {post.title}
              </Link>
              <p className="mt-1 text-sm text-zinc-600">{post.summary}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
