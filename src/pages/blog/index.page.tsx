import type { GetStaticProps } from 'next';
import Posts, { PostsProps } from './Posts';

export interface TPerson {
  person: {
    name?: string;
  };
}

const Blog = ({ posts = [], person = {} }: PostsProps & TPerson) => {
  return (
    <div>
      <p>My blog {person?.name}</p>
      <Posts posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const resPerson = await fetch('http://localhost:3000/api/hello');
  const person = await resPerson.json();

  const result = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await result.json();

  return {
    props: {
      posts,
      person,
    },
  };
};

export default Blog;
