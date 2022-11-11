import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

function ImageGallery({ images }) {
  console.log(images);
  return (
    <section>
      <ul>
        {images.map(image => {
          return <ImageGalleryItem key={image.id} image={image} />;
        })}
      </ul>
    </section>
  );
}

ImageGallery.propTypes = {};

export default ImageGallery;
