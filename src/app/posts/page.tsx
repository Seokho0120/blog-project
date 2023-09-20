import FilterablePost from '@/components/FilterablePost';
import { getAllPosts } from '@/service/posts';
import React from 'react';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePost posts={posts} categories={categories} />;
}
