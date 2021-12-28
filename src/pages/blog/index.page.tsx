import type { NextPage } from 'next';
import Post from './post';

const Blog: NextPage = () => {
  return (
    <div>
      <p>My blog</p>
      <Post />
    </div>
  );
};

export default Blog;
