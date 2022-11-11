import React from 'react';
import PropTypes from 'prop-types';

function ImageGalleryItem({ image }) {
  console.log(image);
  const { previewURL } = image;
  return (
    <li>
      <img src={previewURL} alt=""></img>
    </li>
  );
}

ImageGalleryItem.propTypes = {};

export default ImageGalleryItem;
