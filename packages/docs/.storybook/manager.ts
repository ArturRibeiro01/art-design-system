import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'art-design-systems',
    brandUrl: 'https://github.com/ArturRibeiro01/art-design-system',
    brandImage: '/logo.svg',
  }),
});