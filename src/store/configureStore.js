import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todo from './todo';
import filters from './filters';

const reducer = combineReducers({ todo, filters });
const store = configureStore({ reducer });

export default store;
