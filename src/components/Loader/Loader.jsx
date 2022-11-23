import React from 'react';
import styles from './Loader.module.scss';

function Loader() {
  const { loader, loader__spinner } = styles;
  return (
    <div className={loader}>
      <div className={loader__spinner}></div>
    </div>
  );
}

export default Loader;
