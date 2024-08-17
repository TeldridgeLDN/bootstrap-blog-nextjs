// page.tsx - Server Component (don't include 'use client')

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { markdownToHtml } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BlogPostContent from './BlogPostContent'; // Import the client-side component

type Params = {
  slug: string;
};

// Fetch the post metadata for SEO
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const post = await getPostData(params.slug);

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This post does not exist.',
    };
  }

  return {
    title: `${post.title} - My Blog`,
    description: post.excerpt || `Read this post titled "${post.title}" on My Blog`,
  };
}

// Fetch the post data based on slug
async function getPostData(slug: string) {
  const filePath = path.join(process.cwd(), 'src/posts', `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const htmlContent = await markdownToHtml(content);

  return {
    title: data.title,
    date: data.date,
    excerpt: data.excerpt, // Include the excerpt here
    content: htmlContent,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="px-8 py-16 bg-gray-50">
        <h1 className="text-5xl font-bold text-gray-900">{post.title}</h1>
        <p className="mt-4 text-xl text-gray-700">{post.date}</p>
        {/* Render the content */}
        <BlogPostContent content={post.content} />
      </section>

      <Footer /> {/* Only keep the footer if it's not already in layout.tsx */}
    </div>
  );
}