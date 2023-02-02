import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Blog, { getStaticProps } from '../index.page';
import { mockedPosts } from '../../../../__mocks__/mocks';

describe('Blog', () => {
  it('renders a heading', () => {
    render(<Blog />);
    const text = screen.getByText(/My blog/);
    expect(text).toBeInTheDocument();
  });

  it('displays the list of films', () => {
    render(<Blog posts={mockedPosts} />);

    mockedPosts.forEach(({ title }) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('getStaticProps', async () => {
    const { props } = await getStaticProps();
    expect(props.posts[0].title).toEqual(mockedPosts[0].title);
  });
});
