import React from 'react';
import { render } from '@testing-library/react';
import Posts from '../index';

describe('Post', () => {
  it('renders Posts without posts list', () => {
    const { container } = render(<Posts />);
    const list = container.querySelector('.lists');
    expect(list).not.toBeInTheDocument();
  });

  it('renders Posts with posts list', () => {
    const { container } = render(
      <Posts
        posts={[
          { title: 'title1', id: 1, userId: 1, body: 'description' },
          { title: 'title2', id: 2, userId: 2, body: 'description2' },
        ]}
      />,
    );

    const posts = container.querySelector('.posts');
    expect(posts).toBeInTheDocument();
    const postItems = container.querySelectorAll('.posts__item');
    expect(postItems.length).toEqual(2);
  });
});
