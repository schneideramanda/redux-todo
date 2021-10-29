import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTodoList } from '../../store/todo';
import styles from './TodoListItem.module.css';
import { MdDone } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { availableColors, capitalize } from '../../features/filters/colors';

const TodoListItem = () => {
  const [hover, setHover] = useState(false);
  const [itemBorder, setItemBorder] = useState('');
  const [select, setSelect] = useState('');
  const itemsList = useSelector(selectTodoList);

  function selectColor({ target }) {
    setSelect(target.value);
    setItemBorder(target.value);
  }

  return (
    <div>
      {itemsList.map((item, index) => (
        <div
          className={styles.item}
          style={{ border: itemBorder ? '2px solid ' + itemBorder : 'none' }}
          key={index}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {item}
          {hover && (
            <select
              name='chooseColors'
              id='chooseColors'
              className={styles.select}
              value={select}
              onChange={selectColor}
            >
              <option value=''>Choose a color</option>
              {availableColors.map((color) => (
                <option key={color} value={color}>
                  {capitalize(color)}
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
