import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from '../index.page';

describe('Blog', () => {
  it('renders a heading', () => {
    render(<Blog />);
    const text = screen.getByText('My blog');

    expect(text).toBeInTheDocument();
  });
});
