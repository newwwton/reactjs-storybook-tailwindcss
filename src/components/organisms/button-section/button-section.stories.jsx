import React from 'react';
import ButtonSection from './button-section';

export default {
  title: 'Organisms/Button Section',
  component: ButtonSection,
  parameters: {
    layout: 'fullscreen',
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <ButtonSection {...args} />;

export const ButtonSectionComponent = Template.bind({});
