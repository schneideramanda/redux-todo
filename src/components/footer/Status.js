import React from 'react';
import styles from './Footer.module.css';
import { StatusFilters } from '../../features/filters/filterSlice';

const Status = () => {
  return (
    <div className={styles.status}>
      <h5>Filter by Status</h5>
      {Object.keys(StatusFilters).map((key) => (
        <li key={key}>
          <button className={styles.button}>{key}</button>
        </li>
      ))}
    </div>
  );
};

export default Status;
