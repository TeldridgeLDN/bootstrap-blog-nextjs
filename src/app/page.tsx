import { getPosts, Post } from '../lib/getPosts';
import Link from 'next/link';
import Header from './components/Header'; // Assuming the Header component is located in the 'Header' folder
import Footer from './components/Footer'; // Assuming you have a Footer component

export default function Home() {
  const posts: Post[] = getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-16">
        <h1 className="text-4xl font-bold text-gray-900">The Garden</h1>
        <p className="mt-4 text-lg text-gray-700">
          A digital garden is a collection of imperfect notes, essays, and ideas growing slowly over time.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {posts.map((post) => (
            <div key={post.slug} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <Link href={`/posts/${post.slug}`}>
                <h2 className="text-2xl font-bold text-gray-900">{post.title}</h2>
                <p className="mt-2 text-sm text-gray-600">{post.evolution} Essay</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer /> {/* Optional: Add your Footer component if you want a consistent footer across pages */}
    </div>
  );
}

