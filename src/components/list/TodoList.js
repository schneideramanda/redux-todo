import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../store/filters';
import { selectTodo } from '../../store/todo';
import styles from './TodoList.module.css';
import TodoListItem from './TodoListItem';

const TodoList = () => {
  const { todoList } = useSelector(selectTodo);
  const { todoFiltered } = useSelector(selectTodo);
  const { selectedStatus } = useSelector(selectFilters);
  const { selectedColors } = useSelector(selectFilters);

  useEffect(() => {
    window.localStorage.setItem('savedTasks', JSON.stringify(todoList));
  }, [todoList]);

  if (
    (selectedStatus !== 'all' &&
      !todoList.some((item) => item.status === selectedStatus)) ||
    (selectedColors.length !== 0 &&
      !todoList.some((item) => selectedColors.includes(item.color)))
  )
    return (
      <p className={styles.result}>
        No search results available for this filter...
      </p>
    );

  return (
    <div className={styles.container}>
      {todoFiltered.length > 0
        ? todoFiltered.map(({ id, title, completed, color }) => (
            <TodoListItem
              id={id}
              title={title}
              completed={completed}
              key={id}
              color={color}
            />
          ))
        : todoList.map(({ id, title, completed, color }) => (
            <TodoListItem
              id={id}
              title={title}
              completed={completed}
              key={id}
              color={color}
            />
          ))}
    </div>
  );
};

export default TodoList;
