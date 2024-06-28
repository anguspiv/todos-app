import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, STATUS_CHECKED, STATUS_INDETERMINATE } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Atoms/Checkbox',
  argTypes: {
    checked: {
      control: 'select',
      options: [true, false, STATUS_CHECKED, STATUS_INDETERMINATE],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {},
};
