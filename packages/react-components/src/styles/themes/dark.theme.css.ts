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
} from '@art-design-system/tokens';

export const darkTheme = createTheme(themeContract, {
  color: {
    background: {
      canvas: palette.gray[900],
      surface: palette.gray[800],
      elevated: palette.gray[700],
    },
    text: {
      primary: palette.gray[100],
      secondary: palette.gray[300],
      muted: palette.gray[500],
      onPrimary: palette.neutral[50],
      onSecondary: palette.neutral[50],
    },
    border: {
      default: palette.gray[600],
      muted: palette.gray[700],
      focus: palette.blue[400],
    },
    brand: {
      primary: palette.blue[400],
      hover: palette.blue[300],
      active: palette.blue[500],
    },
    state: {
      success: palette.green[400],
      warning: palette.yellow[400],
      danger: palette.red[500],
      info: palette.blue[300],
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