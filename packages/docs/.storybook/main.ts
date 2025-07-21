// /packages/docs/.storybook/main.ts
import { mergeConfig } from 'vite';
import * as path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-essentials'],
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  }
};

export default config;