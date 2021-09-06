import React from 'react';
import './link.css';

function link(props) {

  return (
    <a className="link" href={props.href}>{props.title}</a>
  );
}

export default link;
