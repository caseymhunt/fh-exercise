import React from 'react';
import Textfield from './Textfield';

export default {
  title: 'TextField',
  component: Textfield,
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
