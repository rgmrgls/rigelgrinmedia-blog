import { FeaturedPosts } from '../sections/index';
import { PostCard, Categories, PostWidget } from '../components';
import { getPosts } from '../services';
import Head from 'next/head'
export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-10 mb-8">
        <Head>
          <meta name="viewport" content="width=device-width,minimum-scale=1, initial-scale=1" />
          <title>Home - RG Media Blog</title>
        </Head>
      <FeaturedPosts />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}

