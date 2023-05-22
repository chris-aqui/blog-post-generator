import React from 'react';
import { render } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders the description', () => {
    const { getByText } = render(<Home />);
    const description = getByText(
      'The AI-powered SAAS solution to generate SEO-optimized blog posts in minutes. Get high-quality content, without sacrificing your time.'
    );
    expect(description).toBeInTheDocument();
  });

  it('renders the "Begin" button', () => {
    const { getByText } = render(<Home />);
    const button = getByText('Begin');
    expect(button).toBeInTheDocument();
  });
});