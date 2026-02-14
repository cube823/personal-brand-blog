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
    <main className="page-shell min-h-screen py-8 md:py-14">
      <article className="surface rise-in p-7 md:p-11">
        <Link className="chip" href="/blog">
          목록으로
        </Link>

        <header className="mt-7 space-y-4 border-b border-[var(--line)] pb-8">
          <p className="text-xs tracking-wide text-[var(--muted)]">{post.publishedAt}</p>
          <h1 className="display-title text-4xl leading-tight text-[#0f172a] md:text-6xl">
            {post.title}
          </h1>
          <p className="max-w-3xl text-lg leading-8 text-[var(--muted)]">{post.summary}</p>
        </header>

        <div className="space-y-5 pt-8">
          {post.content.map((paragraph, index) => (
            <p
              key={paragraph}
              className="rise-in max-w-3xl text-lg leading-9 text-[#1f2937]"
              style={{ animationDelay: `${index * 90 + 140}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </main>
  );
}
