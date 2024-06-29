import { Meta, StoryObj } from '@storybook/react';
import { InputOutline } from './InputOutline';

const meta: Meta = {
  title: 'Components/Atoms/InputOutline',
  component: InputOutline,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputOutline>;

export const Primary: Story = {
  args: {},
};
