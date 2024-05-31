import { render, screen } from '@testing-library/react';
import Index from './_index';

describe('Index', () => {
  it('should render the home page', () => {
    render(<Index />);
    const heading = screen.getByRole('heading', { name: /Welcome to Remix/i });
    expect(heading).toBeInTheDocument();

    expect(screen.getByRole('link', { name: '15m Quickstart Blog Tutorial' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Deep Dive Jokes App Tutorial' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Remix Docs' })).toBeInTheDocument();
  });
});
