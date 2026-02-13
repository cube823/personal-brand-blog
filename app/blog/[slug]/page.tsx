import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/lib/posts";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl px-6 py-16">
      <Link className="text-sm text-zinc-600 underline underline-offset-4" href="/blog">
        목록으로
      </Link>

      <article className="mt-6 space-y-6">
        <header className="space-y-2 border-b border-zinc-200 pb-6">
          <p className="text-xs text-zinc-500">{post.publishedAt}</p>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-900">{post.title}</h1>
          <p className="text-base text-zinc-600">{post.summary}</p>
        </header>

        <div className="space-y-4">
          {post.content.map((paragraph) => (
            <p key={paragraph} className="text-base leading-relaxed text-zinc-700">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
