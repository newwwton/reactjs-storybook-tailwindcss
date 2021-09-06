import React from 'react';
import Hero from './hero'

export default {
  title: 'Organisms/Hero',
  component: Hero,
  argTypes: {
    title: String
  }
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Hero {...args} />;

export const HeroComponent = Template.bind({});
HeroComponent.args = {
    title: "React + Tailwind + Storybook"
};