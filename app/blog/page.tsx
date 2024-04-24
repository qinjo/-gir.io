'use client';

import { getBlogPosts } from "app/uses/use-get-blog-data";
import { useState } from "react";

const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  const [blogs, setState] = useState(null);
  let allBlogs = getBlogPosts();
  setState(allBlogs as any);
  console.log(blogs)
  // @ts-ignore
  return console.log(allBlogs) || (
    <div>
      <div>BlogPage</div>
    </div>
  )
}
