import FilterablePost from '@/components/FilterablePost';
import { getAllposts } from '@/service/posts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '프론트엔드 관련 블로그 글',
};

export default async function PostsPage() {
  const posts = await getAllposts();
  const categories = [...new Set(posts.map((post) => post.category))];

  return <FilterablePost posts={posts} categories={categories} />;
}
