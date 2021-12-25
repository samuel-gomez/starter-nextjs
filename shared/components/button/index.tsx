import Link from 'next/link';

const Button = () => {
  return (
    <div>
      <Link href="/blog">
        <a className="hello">
          <span>My blog</span>
        </a>
      </Link>
    </div>
  );
};

export default Button;
