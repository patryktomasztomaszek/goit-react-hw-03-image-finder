import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

function Modal({ imgUrl, closeModal }) {
  const handleCloseModalOnOverlay = event => {
    if (event.target.nodeName !== 'IMG') {
      closeModal();
    }
  };

  useEffect(() => {
    const handleCloseModalOnEscapeKey = event => {
      const key = event.keyCode;
      if (key === 27) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleCloseModalOnEscapeKey);

    return () => {
      window.removeEventListener('keydown', handleCloseModalOnEscapeKey);
    };
  }, [closeModal]);

  const { modal, modal__image } = styles;

  return (
    <div className={modal} onClick={handleCloseModalOnOverlay}>
      <img className={modal__image} src={imgUrl} alt=""></img>
    </div>
  );
}

Modal.propTypes = { imgUrl: PropTypes.string.isRequired };

export default Modal;
