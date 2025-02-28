import React from 'react';
import './img.css';

export default function ImageCom({ src, classNameImage }) {
  return <img src={src} className={classNameImage} />;
}

ImageCom.propTypes = {
  src: PropTypes.string.isRequired,
  classNameImage: PropTypes.string.isRequired,
};
