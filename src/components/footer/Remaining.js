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
      {todoList.length > 1 && todoList.length + ' Items left in the list...'}
    </div>
  );
};

export default Remaining;
