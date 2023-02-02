import Link from 'next/link';

const Button = () => {
  return (
    <div>
      <Link href="/blog">
        <span>My blog</span>
      </Link>
    </div>
  );
};

export default Button;
