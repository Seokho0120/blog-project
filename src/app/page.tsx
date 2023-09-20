import Hero from '@/components/Hero';
import FeaturePosts from '@/components/FeaturePosts';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturePosts />
    </>
  );
}
