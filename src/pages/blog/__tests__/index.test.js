import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog, { getStaticProps } from '../index.page';
import { mockedPosts } from '../../../../__mocks__/mocks';

describe('Blog', () => {
  it('renders a heading', () => {
    render(<Blog />);
    const text = screen.getByText('My blog');
    expect(text).toBeInTheDocument();
  });

  /*
  test.only('displays the list of films', async () => {
    await render(<Blog />);

    await waitFor(() => {
      screen.debug();
       mockedPosts.posts.forEach(({ title }) => {
        expect(screen.getByText(title)).toBeInTheDocument();
      }); 
    });
  });
  */

  it('getStaticProps', async () => {
    const { props } = await getStaticProps();
    expect(props.posts.posts[0].title).toEqual(mockedPosts.posts[0].title);
  });
});
