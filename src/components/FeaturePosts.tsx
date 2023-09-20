import { getAllPosts } from '@/service/posts';
import Image from 'next/image';
import React from 'react';
import PostsGrid from './PostsGrid';

export default async function FeaturePosts() {
  // 모든 포스트 데이터 읽어오기
  // 모든 포스트 데이터 보여주기
  const posts = await getAllPosts();

  return (
    <section>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
