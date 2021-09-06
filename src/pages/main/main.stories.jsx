import React from 'react';
import Main from './main';

export default {
  title: 'Pages/Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Main {...args} />;

export const MainPage = Template.bind({});
