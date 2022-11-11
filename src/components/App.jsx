import React, { useEffect, useState } from 'react';
import { fetchQueryFromApi } from 'service/fetchFromApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const fetchImages = event => {
    event.preventDefault();
    const eventQuery = event.target.input.value;
    setQuery(query => (query = eventQuery));
    fetchQueryFromApi(eventQuery).then(response => {
      setImages(images => (images = response.hits));
    });
  };

  return (
    <div>
      <Searchbar fetchImages={fetchImages} />
      {images.length > 0 && <ImageGallery images={images} />}
    </div>
  );
};
