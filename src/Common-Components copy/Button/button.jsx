import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button({ onclick, classNameButton, children }) {
  return (
    <button onClick={onclick} className={classNameButton}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onclick: PropTypes.func.isRequired,
  classNameButton: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
