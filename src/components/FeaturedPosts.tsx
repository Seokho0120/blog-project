import { getFeaturedPosts } from '@/service/posts';
import Image from 'next/image';
import React from 'react';
import PostsGrid from './PostsGrid';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section>
      <h2 className='text-2xl font-bold'>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
