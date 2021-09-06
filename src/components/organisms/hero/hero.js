/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './hero.css';
import Link from '../../atoms/link/link';
import newwwton from '../../../assets/svg/newwwton.svg';
import newwwtonLogo from '../../../assets/newwwton/logo-full-width-color.svg';

function Hero(props) {
  return (
    <div className="hero">
      <h1 className="title">
        Welcome to
        {' '}
        {props.title}
        !
      </h1>
      <img width="150" alt="Newwwton Logo" src={newwwtonLogo} />
      <div className="logo">
        <div className="logo-main">
          <img className="logo-main-image" src={newwwton} alt="logo" height="24px" width="24px" />
        </div>
        <p>
          This is an svg-icon.
          <Link href="https://newwwton.com" title=" Read for more." />
        </p>
      </div>
    </div>
  );
}

export default Hero;
