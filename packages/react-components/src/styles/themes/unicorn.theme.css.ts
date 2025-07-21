import { createTheme } from '@vanilla-extract/css';
import { themeContract } from '../contract.css';
import {
  palette,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radius,
  space,
} from '@art-design-systems/tokens';

export const unicornTheme = createTheme(themeContract, {
  color: {
    background: {
      canvas: palette.pink[50],
      surface: palette.fuchsia[100],
      elevated: palette.purple[100],
    },
    text: {
      primary: palette.purple[900],
      secondary: palette.pink[700],
      muted: palette.purple[400],
      onPrimary: palette.neutral[50],
      onSecondary: palette.neutral[50],
    },
    border: {
      default: palette.pink[300],
      muted: palette.pink[200],
      focus: palette.fuchsia[500],
    },
    brand: {
      primary: palette.fuchsia[600],
      hover: palette.fuchsia[700],
      active: palette.fuchsia[800],
    },
    state: {
      success: palette.emerald[500],
      warning: palette.amber[500],
      danger: palette.rose[500],
      info: palette.sky[400],
    },
  },

  font: {
    family: {
      default: fonts.default,
      heading: fonts.heading,
      code: fonts.code,
    },
    size: fontSizes,
    weight: fontWeights,
    lineHeight: lineHeights,
  },

  radius,
  space,
});
