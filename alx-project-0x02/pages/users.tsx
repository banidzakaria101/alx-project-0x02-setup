import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

export default function UsersPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <>
      <Header />
      <main className="p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Latest Posts</h1>
        <div className="grid gap-4">
          {posts.map(post => (
            <PostCard key={post.id} title={post.title} body={post.body} userId={post.userId} id={0}/>
          ))}
        </div>
      </main>
    </>
  );
}
