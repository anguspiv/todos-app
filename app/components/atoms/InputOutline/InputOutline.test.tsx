import { render, screen } from '@testing-library/react';
import { InputOutline } from './InputOutline';

describe('components/atoms/InputOutline', () => {
  it('should render children', () => {
    render(<InputOutline>children</InputOutline>);

    expect(screen.getByText('children')).toBeInTheDocument();
  });
});
