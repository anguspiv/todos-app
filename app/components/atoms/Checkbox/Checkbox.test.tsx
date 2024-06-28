import { render, screen } from '@testing-library/react';
import { Checkbox, STATUS_CHECKED, STATUS_INDETERMINATE } from './Checkbox';

describe('atoms/Checkbox', () => {
  it('should render just the box', () => {
    render(<Checkbox />);

    expect(screen.getByTestId('checkbox')).toBeInTheDocument();
    expect(screen.queryByTestId('checkmark')).not.toBeInTheDocument();
  });

  it('should render the checkmark', () => {
    const { rerender } = render(<Checkbox checked />);

    expect(screen.queryByTestId('checkmark')).toBeInTheDocument();

    rerender(<Checkbox checked={STATUS_CHECKED} />);
  });

  it('should render disabled', () => {
    render(<Checkbox disabled />);

    expect(screen.getByTestId('checkbox')).toHaveAttribute('data-disabled', 'true');
  });

  it('should render indeterminates', () => {
    render(<Checkbox checked={STATUS_INDETERMINATE} />);

    expect(screen.queryByTestId('dash')).toBeInTheDocument();
  });

  it('should render error', () => {
    render(<Checkbox error />);

    expect(screen.getByTestId('checkbox')).toHaveAttribute('data-error', 'true');
  });
});
