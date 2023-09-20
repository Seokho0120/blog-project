import { getPosts } from '@/service/posts';
import React from 'react';

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <>
      <ul>
        {posts.map((item, index) => (
          <li key={index}>{item.date}</li>
        ))}
      </ul>
    </>
  );
}
