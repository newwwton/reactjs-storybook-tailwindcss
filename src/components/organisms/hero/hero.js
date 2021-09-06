import React from 'react';
import './hero.css';
import Link from '../../atoms/link/link';
import newwwton from '../../../assets/svg/newwwton.svg';

function Hero(props) {

  return (
    <div className="hero">
        <h1 className="title">Welcome to {props.title}!</h1>
        <img width="150" alt="Newwwton Logo" src={newwwton} />
        <div className="logo">
            <div className="logo-main">
                <img src={newwwton} alt="logo" height="24px" width="24px" />
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
