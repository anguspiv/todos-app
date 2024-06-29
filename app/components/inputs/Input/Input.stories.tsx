import { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta = {
  title: 'Components/Inputs/Input',
  component: Input,
  argTypes: {
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
    status: {
      control: {
        type: 'select',
        options: ['default', 'success', 'warning', 'error'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Type something...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Hello, world!',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    status: 'error',
  },
};

export const WithWarning: Story = {
  args: {
    status: 'warning',
  },
};

export const WithSuccess: Story = {
  args: {
    status: 'success',
  },
};

export const WithPrefix: Story = {
  args: {
    start: 'https://',
  },
};

export const WithSuffix: Story = {
  args: {
    end: '.com',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
  },
};

export const Textarea: Story = {
  args: {
    type: 'textarea',
  },
};

export const Date: Story = {
  args: {
    type: 'date',
  },
};

export const Time: Story = {
  args: {
    type: 'time',
  },
};

export const DateTime: Story = {
  args: {
    type: 'datetime-local',
  },
};
