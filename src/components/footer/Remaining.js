import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../../store/todo';
import styles from './Footer.module.css';

const Remaining = () => {
  const itemsLeft = useSelector(selectTodoList).length;

  return (
    <div className={styles.remaining}>
      <h5>Remaining Todos</h5>
      {itemsLeft === 0 && ' No items left in the list...'}
      {itemsLeft === 1 && itemsLeft + ' Item left in the list...'}
      {itemsLeft > 1 && itemsLeft + ' Items left in the list...'}
    </div>
  );
};

export default Remaining;
