import React, { useState } from 'react';
import { fetchQueryFromApi } from 'service/fetchFromApi';
import ImageGallery from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(false);
  const [modalUrl, setModalUrl] = useState(null);

  const fetchImages = event => {
    event.preventDefault();
    setPage(1);

    const eventQuery = event.target.input.value;
    if (eventQuery === '') {
      return alert('Type something!');
    }
    setQuery(query => (query = eventQuery));

    setIsLoading(true);

    fetchQueryFromApi(eventQuery)
      .then(response => {
        if (response.total === 0) {
          return alert('No pictures found!');
        }
        setImages(images => (images = response.hits));
        setTotalImages(response.totalHits);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const openModal = event => {
    const url = event.target.dataset.imgSrc;
    setModalUrl(url);
  };
  const closeModal = () => setModalUrl(null);

  const loadMore = () => {
    setIsLoading(true);
    fetchQueryFromApi(query, page + 1)
      .then(response => {
        const imagesBuffer = [...images, ...response.hits];
        setImages(imagesBuffer);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setPage(page + 1);
  };

  return (
    <main>
      {isLoading && <Loader />}
      <Searchbar fetchImages={fetchImages} />
      {images.length > 0 && (
        <>
          <ImageGallery images={images} openModal={openModal} />

          {images.length !== totalImages && (
            <Button title="Load More" onClick={loadMore} />
          )}
          {modalUrl && <Modal imgUrl={modalUrl} closeModal={closeModal} />}
        </>
      )}
    </main>
  );
};
