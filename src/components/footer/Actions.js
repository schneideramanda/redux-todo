import React from 'react';
import styles from './Footer.module.css';

const Actions = () => {
  return (
    <div className={styles.actions}>
      <h5>Actions</h5>
      <button className={styles.button}>Mark All Completed</button>
      <button className={styles.button}>Clear Completed</button>
    </div>
  );
};

export default Actions;
