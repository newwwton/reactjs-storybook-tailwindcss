import React from 'react';
import './button-section.css';
import ButtonGroup from '../../molecules/button-group/button-group';

function ButtonSection() {

  return (
    <div className="btn-section">
    <div className="btn-inner-section">
        <h3 className="btn-text">Here are some links to help you start:</h3>
        <ButtonGroup />
    </div>
</div>
  );
}

export default ButtonSection;
