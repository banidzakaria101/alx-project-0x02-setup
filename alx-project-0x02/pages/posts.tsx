import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface PostsPageProps {
  posts: PostProps[];
}

export default function PostsPage({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
        <div className="grid gap-4">
          {posts.map(post => (
            <PostCard
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};
