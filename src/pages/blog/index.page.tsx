import type { GetStaticProps } from 'next';
import { useEffect, useState } from 'react';
import Posts, { PostsProps } from './Posts';

export interface TPerson {
  person: {
    name?: string;
  };
}
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL;

const Blog = ({ posts = [] }: PostsProps) => {
  const [person, setPerson] = useState({ name: 'vide' });

  useEffect(() => {
    fetch(`${baseUrl}api/hello`)
      .then(r => r.json())
      .then(setPerson);
  }, []);

  return (
    <div>
      <p>My blog {person?.name}</p>
      <Posts posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await result.json();

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
