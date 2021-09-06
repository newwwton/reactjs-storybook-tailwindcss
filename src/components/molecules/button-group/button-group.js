import React from 'react';
import './button-group.css';
import Button from '../../atoms/button/button';

function ButtonGroup() {
  return (
    <div className="btn-group">
      <Button name="React" icon="react" href="https://reactjs.org" size="lg" />
      <Button name="Tailwind" icon="tailwind" href="https://tailwindcss.com" size="lg" />
      <Button name="Storybook" icon="storybook" href="https://storybook.js.org/docs/react/" size="lg" />
    </div>
  );
}

export default ButtonGroup;
