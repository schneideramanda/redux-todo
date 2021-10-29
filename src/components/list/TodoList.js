import React from 'react';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  return (
    <div className={styles.container}>
      <TodoListItem />
    </div>
  );
};

export default TodoList;
