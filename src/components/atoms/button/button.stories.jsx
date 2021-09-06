import React from 'react';

import Button from './button';

export default {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: String,
    name: String,
    icon: String,
    size: {
      options: ['sm','md','lg','xl'],
      control: {type: 'radio'}
    }
  }
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Button {...args} />;

export const TailwindButton = Template.bind({});
TailwindButton.args = {
  name: 'Tailwind',
  icon: 'tailwind',
  href: 'https://tailwindcss.com',
  size: 'lg'
};

export const ReactButton = Template.bind({});
ReactButton.args = {
    name: 'React',
    icon: 'react',
    href: 'https://reactjs.org',
    size: 'lg'
};

export const StorybookButton = Template.bind({});
StorybookButton.args = {
    name: 'Storybook',
    icon: 'storybook',
    href: 'https://storybook.js.org/docs/react/',
    size: 'lg'
};

export const NewwwtonButton = Template.bind({});
NewwwtonButton.args = {
    name: 'Newwwton',
    icon: 'newwwton',
    href: 'https://newwwton.com',
    size: 'lg'
};
