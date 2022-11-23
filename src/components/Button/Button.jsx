import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function LoadMoreButton({ title, onClick }) {
  const { button } = styles;

  return (
    <button className={button} onClick={onClick}>
      {title}
    </button>
  );
}

LoadMoreButton.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

export default LoadMoreButton;
