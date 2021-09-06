import React from 'react';
import './button.css';
import react from '../../../assets/svg/react.svg';
import newwwton from '../../../assets/svg/newwwton.svg';
import storybook from '../../../assets/svg/storybook.svg';
import tailwind from '../../../assets/svg/tailwind.svg';

function button(props) {
  // sizeMap for sm, md, lg, xl
  const sizeMap = {
    sm: {
      width: '12px',
      height: '12px',
    },
    md: {
      width: '20px',
      height: '20px',
    },
    lg: {
      width: '24px',
      height: '24px',
    },
    xl: {
      width: '48px',
      height: '48px',
    },
  };

  // iconMap for react, newwwton, storybook, tailwind
  const iconMap = {
    react,
    newwwton,
    storybook,
    tailwind,
  };

  return (
    <a className="btn" target="_blank" href={props.href} rel="noreferrer">
      <img className="logo-main-image" src={iconMap[props.icon]} alt="logo" height={sizeMap[props.size].height} width={sizeMap[props.size].width} />
      <div>
        {props.name}
      </div>
    </a>
  );
}

export default button;
