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

export const lightTheme = createTheme(themeContract, {
  color: {
    background: {
      canvas: palette.gray[50],
      surface: palette.gray[100],
      elevated: palette.gray[200],
    },
    text: {
      primary: palette.gray[900],
      secondary: palette.gray[700],
      muted: palette.gray[500],
      onPrimary: palette.neutral[50],
      onSecondary: palette.neutral[50],
    },
    border: {
      default: palette.gray[300],
      muted: palette.gray[200],
      focus: palette.blue[500],
    },
    brand: {
      primary: palette.blue[600],
      hover: palette.blue[700],
      active: palette.blue[800],
    },
    state: {
      success: palette.green[600],
      warning: palette.yellow[500],
      danger: palette.red[600],
      info: palette.blue[500],
    },
  },
  
  font: {
    family: {
      default: fonts.default,
      heading: fonts.heading,
      code: fonts.code,
    },
    size: {
      xxs: fontSizes.xxs,
      xs: fontSizes.xs,
      sm: fontSizes.sm,
      md: fontSizes.md,
      lg: fontSizes.lg,
      xl: fontSizes.xl,
      '2xl': fontSizes['2xl'],
      '4xl': fontSizes['4xl'],
      '5xl': fontSizes['5xl'],
      '6xl': fontSizes['6xl'],
      '7xl': fontSizes['7xl'],
      '8xl': fontSizes['8xl'],
      '9xl': fontSizes['9xl'],
    },
    weight: {
      regular: fontWeights.regular,
      medium: fontWeights.medium,
      bold: fontWeights.bold,
    },
    lineHeight: {
      shorter: lineHeights.shorter,
      short: lineHeights.short,
      base: lineHeights.base,
      tall: lineHeights.tall,
    },
  },
  
  radius,
  space,
});