import { getPostData } from '@/service/posts';

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const posts = await getPostData(slug);
  return (
    <>
      <h1>{posts.title}</h1>
      <pre>{posts.content}</pre>
    </>
  );
}
