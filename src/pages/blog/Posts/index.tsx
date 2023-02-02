import styles from './Posts.module.scss';

export interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostsProps {
  posts: PostProps[];
}

const Posts = ({ posts = [] }: PostsProps) => {
  return posts && posts.length > 0 ? (
    <ul className={styles.posts}>
      {posts.map((post: PostProps) => (
        <li className="posts__item" key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  ) : (
    <></>
  );
};

export default Posts;
