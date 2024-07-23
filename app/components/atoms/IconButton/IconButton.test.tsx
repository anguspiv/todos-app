import { render, screen } from '@testing-library/react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from './IconButton';

describe('components/atoms/IconButton', () => {
  it('should render the icon button', () => {
    render(<IconButton icon={faUser} label="Test Button" />);

    const iconButton = screen.getByRole('button', { name: /test button/i });

    expect(iconButton).toBeInTheDocument();
  });
});
