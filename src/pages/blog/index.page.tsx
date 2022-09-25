import type { GetStaticProps } from 'next';
import { baseUrl } from 'pages/_app.page';
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
  const resPerson = await fetch(`${baseUrl}/api/hello`);
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
