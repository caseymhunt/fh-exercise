import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';

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
