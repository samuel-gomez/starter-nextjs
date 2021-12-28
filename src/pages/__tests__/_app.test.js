import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../_app.page';

describe('App', () => {
  it('render App with component', () => {
    const Custom = () => <p>Custom component</p>;

    render(<App Component={Custom} />);
    const componentText = screen.getByText('Custom component');

    expect(componentText).toBeInTheDocument();
  });
});
