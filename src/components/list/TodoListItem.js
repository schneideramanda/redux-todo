import React, { useState } from 'react';
import { removeTodo, saveColor, toggleComplete } from '../../store/todo';
import styles from './TodoListItem.module.css';
import { MdDone } from 'react-icons/md';
import { MdDelete } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { selectFilters } from '../../store/filters';

const TodoListItem = ({ id, title, completed, color }) => {
  const [itemBorder, setItemBorder] = useState(color);
  const [select, setSelect] = useState(color);
  const { colors } = useSelector(selectFilters);
  const dispatch = useDispatch();

  function selectColor({ target }) {
    setSelect(target.value);
    setItemBorder(target.value);
    dispatch(saveColor({ id: id, color: target.value }));
  }

  function handleDelete() {
    dispatch(removeTodo({ id: id }));
  }

  function handleCheck() {
    dispatch(toggleComplete({ id: id }));
  }

  const capitalize = (s) => s[0].toUpperCase() + s.slice(1);

  return (
    <div>
      <div
        className={styles.item}
        style={{
          border: itemBorder ? '2px solid ' + itemBorder : 'none',
          background: completed ? '#8dbf8da6' : '#f1f1f171',
        }}
      >
        <span className={`${completed && styles.disabledText}`}>{title}</span>
        <select
          name='chooseColors'
          id='chooseColors'
          className={`${styles.select} ${completed && styles.disabled}`}
          value={select}
          onChange={selectColor}
        >
          <option value=''>Choose a color</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {capitalize(color)}
            </option>
          ))}
        </select>
        <div
          className={`${styles.done} ${completed && styles.disabledText}`}
          onClick={handleCheck}
        >
          <MdDone />
        </div>
        <div
          className={`${styles.delete} ${completed && styles.disabledText}`}
          onClick={handleDelete}
        >
          <MdDelete />
        </div>
      </div>
    </div>
  );
};

export default TodoListItem;
