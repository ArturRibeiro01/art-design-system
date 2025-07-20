import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../../../react-components/src/Avatar/Avatar.tsx';

const meta: Meta<typeof Avatar> = {
  title: 'Example/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
    },
    rounded: {
      control: 'boolean',
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'Avatar demo',
    size: 'md',
    rounded: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Square: Story = {
  args: {
    rounded: false,
  },
};