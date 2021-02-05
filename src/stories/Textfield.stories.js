import React from 'react';
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Text Field',
  // component: Textfield,
  decorators: [withDesign],
};

const Template = args => (
  <FormControl id="email" isInvalid={args.isInvalid}>
    <FormLabel>{args.label}</FormLabel>
    <Input type="email" />
    <FormErrorMessage>{args.errorMessage}</FormErrorMessage>
    <FormHelperText>{args.helperText}</FormHelperText>
  </FormControl>
);

export const Default = args => (
  <FormControl id="email">
    <FormLabel>{args.label}</FormLabel>
    <Input type="email" />
    <FormHelperText>{args.helperText}</FormHelperText>
  </FormControl>
);
Default.args = {
  label: 'Primary',
  helperText: 'This is helper text',
};

export const Invalid = Template.bind({});
Invalid.args = {
  label: 'Label',
  helperText: 'This is helper text',
  errorMessage: 'Error message',
  isInvalid: true,
};

// Add Figma to the 'Default' view
Default.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/5PkkZJIl0qWjcqNOJLsya6/Text-Field-Doc-Example?node-id=0%3A1',
  },
};
Invalid.parameters = {
  design: {
    type: 'figma',
    url:
      'https://www.figma.com/file/5PkkZJIl0qWjcqNOJLsya6/Text-Field-Doc-Example?node-id=0%3A1',
  },
};

// export const Primary = Template.bind({});
// Primary.args = {
//   label: 'Primary',
//   helperText: 'This is the primary helper text',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Secondary',
//   helperText: 'This is the secondary helper text',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
