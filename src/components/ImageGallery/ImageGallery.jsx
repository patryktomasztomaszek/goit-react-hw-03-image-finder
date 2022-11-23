import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import styles from './ImageGallery.module.scss';

function ImageGallery({ images, openModal }) {
  const { gallery, gallery__container } = styles;

  return (
    <section className={gallery}>
      <ul className={gallery__container}>
        {images.map(image => {
          return (
            <ImageGalleryItem
              openModal={openModal}
              key={image.id}
              image={image}
            />
          );
        })}
      </ul>
    </section>
  );
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ImageGallery;
