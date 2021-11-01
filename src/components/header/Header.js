import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo } from '../../store/todo';
import styles from './Header.module.css';

const Header = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  function handleClick() {
    if (input !== '') {
      dispatch(saveTodo({ title: input }));
      setInput('');
    } else {
      alert('You need to write a task to be done');
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      if (input !== '') {
        dispatch(saveTodo({ title: input }));
        setInput('');
      } else {
        alert('You need to write a task to be done');
      }
    }
  }

  return (
    <header className={styles.header}>
      <input
        type='text'
        className={styles.newtodo}
        placeholder='What needs to be done?'
        value={input}
        onChange={({ target }) => setInput(target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.addtodo} onClick={handleClick}>
        Add
      </button>
    </header>
  );
};

export default Header;
