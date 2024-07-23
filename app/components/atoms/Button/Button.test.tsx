import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('components/atoms/Button', () => {
  it('should render a button with the text "Test"', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button', { name: /Test/i });
    expect(button).toBeInTheDocument();
  });
});
