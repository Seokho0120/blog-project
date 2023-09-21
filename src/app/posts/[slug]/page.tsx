import { getPostData } from '@/service/posts';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import ReactDom from 'react-dom';
import MarkdownViewer from '@/components/MarkdownViewer';

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
      <MarkdownViewer content={posts.content} />
    </>
  );
}
