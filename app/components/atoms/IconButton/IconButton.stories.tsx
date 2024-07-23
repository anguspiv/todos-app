import { Meta, StoryObj } from '@storybook/react';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { IconButton } from './IconButton';

const meta: Meta = {
  title: 'atoms/IconButton',
  component: IconButton,
  argTypes: {
    onClick: { action: 'clicked' },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    type: {
      control: {
        type: 'select',
        options: ['button', 'submit', 'reset'],
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
  },
};

export const Small: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    size: 'large',
  },
};

export const Disabled: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    disabled: true,
  },
};

export const Danger: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    color: 'danger',
  },
};

export const Success: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    color: 'success',
  },
};

export const Warning: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    color: 'warning',
  },
};

export const Info: Story = {
  args: {
    icon: faAdd,
    label: 'Add',
    color: 'info',
  },
};
