import React from 'react';
import Textfield from '../components/Textfield';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Text Field',
  component: Textfield,
  decorators: [withDesign],
};

const Template = args => <Textfield {...args} />;

export const Default = Template.bind({});
Default.args = {
  isInvalid: false,
  isReadOnly: false,
};

export const Invalid = Template.bind({});
Invalid.args = {
  isInvalid: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  isReadOnly: true,
};

// Add the Figma design embed to each of the story types.
const storyNames = [Default, Invalid, ReadOnly];

storyNames.forEach(storyName => {
  storyName.parameters = {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/5PkkZJIl0qWjcqNOJLsya6/Text-Field-Doc-Example?node-id=0%3A1',
    },
  };
});
