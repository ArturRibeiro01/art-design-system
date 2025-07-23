import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '@art-design-systems/react-components';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Default: StoryObj<typeof Avatar> = {
  args: {
    src: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
    alt: 'Avatar demo',
    size: 'md',
    rounded: true,
  },
};