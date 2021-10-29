import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TodoList from './components/list/TodoList';

const App = () => {
  return (
    <div className='app'>
      <h1>Redux - Todo List</h1>
      <div className='todo-app'>
        <Header />
        <TodoList />
        <Footer />
      </div>
    </div>
  );
};

export default App;
