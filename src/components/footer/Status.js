import React from 'react';
import styles from './Footer.module.css';
import { useDispatch } from 'react-redux';
import {
  selectStatus,
  selectFilters,
  filterByStatus,
} from '../../store/filters';
import { useSelector } from 'react-redux';

const Status = () => {
  const { status } = useSelector(selectFilters);
  const dispatch = useDispatch();

  function handleClick(value) {
    dispatch(selectStatus(value));
    dispatch(filterByStatus());
  }

  return (
    <div className={styles.status}>
      <h5>Filter by Status</h5>
      {Object.entries(status).map((pair) => (
        <li key={pair[0]}>
          <button
            className={styles.button}
            onClick={() => handleClick(pair[1])}
          >
            {pair[0]}
          </button>
        </li>
      ))}
    </div>
  );
};

export default Status;
