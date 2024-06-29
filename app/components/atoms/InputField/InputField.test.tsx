import { render, screen } from '@testing-library/react';
import { InputField } from './InputField';

describe('components/atoms/InputField', () => {
  it('should render input', () => {
    render(<InputField />);
    const input = screen.getByRole('textbox');
    expect(input).toBeInTheDocument();
  });
});
