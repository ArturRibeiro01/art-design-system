
import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'inline-block',
  objectFit: 'cover',
  backgroundColor: '#ccc',
});

export const size = {
  sm: style({ width: 32, height: 32 }),
  md: style({ width: 48, height: 48 }),
  lg: style({ width: 72, height: 72 }),
};

export const rounded = style({
  borderRadius: '50%',
});