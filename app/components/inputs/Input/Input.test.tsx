import { render, screen } from '@testing-library/react';
import { Input } from './Input';

describe('components/inputs/Input', () => {
  it('renders the input', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
