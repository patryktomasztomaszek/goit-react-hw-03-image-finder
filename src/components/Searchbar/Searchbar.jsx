import React from 'react';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.scss';

function Searchbar({ fetchImages }) {
  const { searchbar, searchbar__form, searchbar__button, searchbar__input } =
    styles;

  return (
    <header className={searchbar}>
      <form onSubmit={fetchImages} className={searchbar__form}>
        <button type="submit" className={searchbar__button}>
          🔍
        </button>

        <input
          className={searchbar__input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="input"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = { fetchImages: PropTypes.func.isRequired };

export default Searchbar;
