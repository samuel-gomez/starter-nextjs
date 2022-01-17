import type { GetStaticProps } from 'next';
import Posts, { PostsProps } from './Posts';

const Blog = ({ posts = [] }: PostsProps) => {
  return (
    <div>
      <p>My blog</p>
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
