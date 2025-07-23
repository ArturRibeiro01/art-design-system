import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming/create';

const theme = create({
  base: 'light',
  
  brandTitle: 'art-design-systems',
  brandUrl: 'https://github.com/ArturRibeiro01/art-design-system',
  brandImage: '/logo.svg',
  
  // Cores principais
  colorPrimary: '#007aff',       // cor de destaque (seleção etc)
  colorSecondary: '#8E44AD',     // alternativa (hover etc)
  
  // Backgrounds
  // appBg: '#fdfefe',              // fundo geral
  appContentBg: '#ffffff',       // fundo dos painéis de docs
  appBorderColor: '#e5e7eb',     // borda (ex: entre nav e painel)
  
  // Tipografia
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  textColor: '#111827',          // texto padrão
  textInverseColor: '#ffffff',   // texto claro
  
  // Sidebar (ícones e textos)
  barBg: '#ffffff',              // fundo da sidebar (menu)
  barTextColor: '#6b7280',       // texto padrão (ex: Atoms, Docs)
  barSelectedColor: '#007aff',   // item selecionado (ex: Default)
  barHoverColor: '#111827',      // hover no item
  
  // Borders
  inputBorder: '#d1d5db',
  inputBorderRadius: 8,
});

addons.setConfig({
  theme,
});