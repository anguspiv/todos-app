import { Meta, StoryObj } from '@storybook/react';
import { Todo } from './Todo';

const meta: Meta<typeof Todo> = {
  title: 'Components/Todo',
  component: Todo,
};

export default meta;

type Story = StoryObj<typeof Todo>;

export const Primary: Story = {};
