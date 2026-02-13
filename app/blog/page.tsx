import Link from "next/link";
import { posts } from "@/lib/posts";

export const metadata = {
  title: "Blog | My Branding Blog",
  description: "개인 브랜딩 블로그 글 목록",
};

export default function BlogListPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt),
  );

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Blog</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900">
            글 목록
          </h1>
        </div>
        <Link className="text-sm text-zinc-600 underline underline-offset-4" href="/">
          홈으로
        </Link>
      </div>

      <ul className="space-y-4">
        {sorted.map((post) => (
          <li key={post.slug} className="rounded-xl border border-zinc-200 p-5">
            <p className="text-xs text-zinc-500">{post.publishedAt}</p>
            <Link className="mt-2 block text-xl font-medium text-zinc-900" href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
            <p className="mt-2 text-sm text-zinc-600">{post.summary}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
