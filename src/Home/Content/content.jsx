import { Link } from 'react-router-dom';
import Button from '../../Common-Components copy/Button/button';
import './content.css';
import { BsLightningCharge } from 'react-icons/bs';
import React from 'react';

export default function ContentCom() {
  return (
    <>
      <div className="content">
        <div className="content-items">
          <BsLightningCharge className="content-icon" />
          <h1>Codeccharya</h1>
          <div className="content-p-div">
            <p>Elevate your skills with HTML, CSS, JavaScript, and React !</p>
          </div>
          <Button classNameButton={'learnButton'}>
            <Link to={'/course'}>Learn</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
