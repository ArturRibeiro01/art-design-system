import { createThemeContract } from '@vanilla-extract/css';

export const themeContract = createThemeContract({
  color: {
    background: {
      canvas: null,  // main background
      surface: null,  // cards, menus
      elevated: null, // modais, tooltips
    },
    text: {
      primary: null,
      secondary: null,
      muted: null,
      onPrimary: null,
      onSecondary: null,
    },
    border: {
      default: null,
      muted: null,
      focus: null,
    },
    brand: {
      primary: null,
      hover: null,
      active: null,
    },
    state: {
      success: null,
      warning: null,
      danger: null,
      info: null,
    },
  },
  font: {
    family: {
      default: null,
      heading: null,
      code: null,
    },
    size: {
      xxs: null,
      xs: null,
      sm: null,
      md: null,
      lg: null,
      xl: null,
      '2xl': null,
      '4xl': null,
      '5xl': null,
      '6xl': null,
      '7xl': null,
      '8xl': null,
      '9xl': null,
    },
    weight: {
      regular: null,
      medium: null,
      bold: null,
    },
    lineHeight: {
      shorter: null,
      short: null,
      base: null,
      tall: null,
    },
  },
  radius: {
    px: null,
    xs: null,
    sm: null,
    md: null,
    lg: null,
    full: null,
  },
  space: {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    10: null,
    12: null,
    16: null,
    20: null,
    40: null,
    64: null,
    80: null,
  },
});