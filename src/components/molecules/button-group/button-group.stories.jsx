import React from 'react';
import ButtonGroup from './button-group';

export default {
  title: 'Molecules/Button Group',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  }
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ButtonGroup {...args} />;

export const Buttongroup = Template.bind({});