import React from 'react';
import Link from '../link/link';

export default {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: String,
    title: String
  }
};

// eslint-disable-next-line react/jsx-props-no-spreading
const Template = (args) => <Link {...args} />;

export const NewwwtonLink = Template.bind({});
NewwwtonLink.args = {
    href: 'https://newwwton.com',
    title: 'Newwwton'
};