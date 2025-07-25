import {themes} from './theme.css';

type ThemeName = keyof typeof themes;

export const applyThemeClass = (theme: ThemeName) => {
  document.documentElement.className = themes[theme];
};