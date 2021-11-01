import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { filterByStatus } from '../../store/filters';
import {
  markAllCompleted,
  selectTodo,
  markAllIncomplete,
  clearCompleted,
} from '../../store/todo';
import styles from './Footer.module.css';

const Actions = () => {
  const { todoList } = useSelector(selectTodo);
  const dispatch = useDispatch();
  const found = todoList.some((item) => item.status === 'active');

  function handleCompleted() {
    dispatch(markAllCompleted());
    dispatch(filterByStatus());
  }

  function handleIncomplete() {
    dispatch(markAllIncomplete());
    dispatch(filterByStatus());
  }

  return (
    <div className={styles.actions}>
      <h5>Actions</h5>
      {found || todoList.length === 0 ? (
        <button className={styles.button} onClick={handleCompleted}>
          Mark All Completed
        </button>
      ) : (
        <button className={styles.button} onClick={handleIncomplete}>
          Mark All Incomplete
        </button>
      )}

      <button
        className={styles.button}
        onClick={() => dispatch(clearCompleted())}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Actions;
