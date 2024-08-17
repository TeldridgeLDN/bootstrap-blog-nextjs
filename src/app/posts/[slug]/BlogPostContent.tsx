'use client';

import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';

type BlogPostContentProps = {
  content: MDXRemoteSerializeResult;
};

export default function BlogPostContent({ content }: BlogPostContentProps) {
  // Use hooks here if needed

  return (
    <div className="mt-8 text-lg text-gray-700">
      <MDXRemote {...content} />
    </div>
  );
}
