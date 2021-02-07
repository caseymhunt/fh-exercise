import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { fhTheme as theme } from '../src/theme/fhTheme';
import Fonts from '../src/components/Fonts';

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
};
