import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('inputs/Checkbox', () => {
  it('should render a checkbox', () => {
    render(
      <Checkbox id="test" aria-label="Test">
        Test
      </Checkbox>,
    );
    const checkbox = screen.getByRole('checkbox', { name: 'Test' });
    expect(checkbox).toBeInTheDocument();
  });

  it('should handle events', async () => {
    const user = userEvent.setup();

    const onChange = vi.fn();
    const onFocus = vi.fn();
    const onBlur = vi.fn();

    render(
      <Checkbox id="test" onChange={onChange} onFocus={onFocus} onBlur={onBlur} aria-label="Label">
        Label
      </Checkbox>,
    );

    const checkbox = screen.getByRole('checkbox', { name: 'Label' });

    await user.click(checkbox);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onFocus).toHaveBeenCalledTimes(1);

    await user.tab();

    expect(onBlur).toHaveBeenCalledTimes(1);
  });
});
