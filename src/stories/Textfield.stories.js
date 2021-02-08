import React from 'react';
import Textfield from '../components/Textfield';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Text Field',
  component: Textfield,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5PkkZJIl0qWjcqNOJLsya6/Text-Field-Doc-Example?node-id=0%3A1',
    },
  },
};

const Template = args => <Textfield {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  helperText: 'Helper text that is helpful.',
};

export const Required = Template.bind({});
Required.args = {
  isRequired: true,
};

export const Invalid = Template.bind({});
Invalid.args = {
  isInvalid: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  isReadOnly: true,
  value: 'This can be copied but not edited',
};
