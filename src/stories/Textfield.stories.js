import React from 'react';
import Textfield from './Textfield';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'TextField',
  component: Textfield,
  decorators: [withDesign],
};

// const Template = args => (
//   <ChakraProvider theme={theme}>
//     <Textfield {...args} />
//   </ChakraProvider>
// );

export const Primary = args => <Textfield {...args} />;
Primary.args = {
  label: 'Primary',
  helperText: 'This is helper text',
};

Primary.parameters = {
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
