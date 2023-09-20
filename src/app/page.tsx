import Hero from '@/components/Hero';
import FeaturedPosts from '@/components/FeaturedPosts';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPosts />
    </>
  );
}
