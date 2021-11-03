import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodo } from '../../store/todo';
import styles from './Footer.module.css';

const Remaining = () => {
  const { todoList } = useSelector(selectTodo);

  return (
    <div className={styles.remaining}>
      <h5>Remaining Todos</h5>
      {todoList.length === 0 && ' No items left in the list...'}
      {todoList.length === 1 && todoList.length + ' Item left in the list...'}
      {todoList.length > 1 && (
        <div className={styles.countContainer}>
          <strong>{todoList.length}</strong>
          <p>Items left in the list...</p>
        </div>
      )}
    </div>
  );
};

export default Remaining;
