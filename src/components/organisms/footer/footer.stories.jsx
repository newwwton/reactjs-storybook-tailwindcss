import React from 'react';
import Footer from './footer';

export default {
  title: 'Organisms/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Footer {...args} />;

export const footerComponent = Template.bind({});
