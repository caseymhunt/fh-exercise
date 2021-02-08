import { extendTheme } from '@chakra-ui/react';

export const fhTheme = extendTheme({
  colors: {
    firehydrant: {
      grey: {
        90: '#182042',
        70: '#536685',
        50: '#8a9bb7',
        30: '#c6d0e2',
        10: '#eef1f6',
      },
      purple: {
        90: '#220e6d',
        70: '#3b2492',
        50: '#614ab6',
        30: '#b2a6e3',
        10: '#f1edff',
      },
      alert: {
        90: '#89120c',
        70: '#c6352d',
        50: '#e17f7a',
        30: '#f5bfbc',
        10: '#fceeed',
      },
    },
  },
  fonts: {
    body:
      'Open Sans, Roboto Mono, Roboto, Helvetica, Arial, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    heading:
      'Open Sans, Roboto Mono, Roboto, Helvetica, Arial, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
  },
  lineHeights: {
    taller: '1.7',
  },
});
