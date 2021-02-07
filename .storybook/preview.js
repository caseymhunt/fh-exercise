import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { fhTheme as theme } from '../src/theme/fhTheme';

export const decorators = [
  Story => (
    <ChakraProvider theme={theme}>
      <Story />
    </ChakraProvider>
  ),
];

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: '^on[A-Z].*' },
};
