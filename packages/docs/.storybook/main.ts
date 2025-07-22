import { mergeConfig } from 'vite';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)', '../src/stories/**/*.mdx'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-docs'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  }
};

export default config;