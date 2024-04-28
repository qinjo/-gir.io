import { getBlogPosts } from "app/uses/use-get-blog-data";
import Link from 'next/link';
import { Suspense } from 'react';

const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();
  return console.log('allBlogs', allBlogs[0].metadata) || (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter mt-8">
        Read my blog
      </h1>
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, i) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-row">
              <span>
                {`${i + 1}. `}
              </span>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                {/* <Views slug={post.slug} /> */}
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}
