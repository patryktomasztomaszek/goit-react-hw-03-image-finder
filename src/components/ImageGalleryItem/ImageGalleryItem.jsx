import React from 'react';
import PropTypes from 'prop-types';
import styles from './ImageGalleryItem.module.scss';

function ImageGalleryItem({ image, openModal }) {
  const { webformatURL, largeImageURL, tags } = image;

  const { item, item__image } = styles;

  return (
    <li className={item}>
      <img
        className={item__image}
        onClick={openModal}
        src={webformatURL}
        alt={tags}
        data-img-src={largeImageURL}
      ></img>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};

export default ImageGalleryItem;
