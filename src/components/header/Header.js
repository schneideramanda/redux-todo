import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../store/todo';
import styles from './Header.module.css';

const Header = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(saveTodo({ item: input, name: input }));
    setInput('');
  }

  return (
    <header className={styles.header}>
      <input
        type='text'
        className={styles.newtodo}
        placeholder='What needs to be done?'
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <button className={styles.addtodo} onClick={handleClick}>
        Add
      </button>
    </header>
  );
};

export default Header;
