import { configureStore, combineReducers } from '@reduxjs/toolkit';
import todo from './todo';

const reducer = combineReducers({ todo });
const store = configureStore({ reducer });

export default store;
