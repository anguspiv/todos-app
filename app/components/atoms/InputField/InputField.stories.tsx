import { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';

const meta: Meta = {
  title: 'Components/Atoms/InputField',
  component: InputField,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
  args: {
    placeholder: 'Placeholder',
  },
};
