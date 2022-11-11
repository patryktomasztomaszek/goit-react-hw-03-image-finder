import React from 'react';
import PropTypes from 'prop-types';

function Searchbar({ fetchImages }) {
  return (
    <header className="searchbar">
      <form onSubmit={fetchImages} className="form">
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
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

Searchbar.propTypes = {};

export default Searchbar;
