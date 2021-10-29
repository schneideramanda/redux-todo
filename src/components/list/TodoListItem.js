import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../../store/todo';
import styles from './TodoListItem.module.css';
import { MdDone } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { availableColors } from '../../features/filters/colors';

const TodoListItem = () => {
  const [hover, setHover] = useState(false);
  const itemsList = useSelector(selectTodoList);

  return (
    <div>
      {itemsList.map((item, index) => (
        <div
          className={styles.item}
          key={index}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {item}
          {hover && (
            <select name='chooseColors' id='chooseColors'>
              {availableColors.map((color) => (
                <option key={color} value={color}>
                  {color}
                </option>
              ))}
            </select>
          )}
          {hover && (
            <div className={styles.done}>
              <MdDone />
            </div>
          )}
          {hover && (
            <div className={styles.delete}>
              <MdDelete />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoListItem;
