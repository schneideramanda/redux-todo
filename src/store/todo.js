import { createSlice } from '@reduxjs/toolkit';

const savedTasks = window.localStorage.getItem('savedTasks');
const parsedTasks = JSON.parse(savedTasks);

const initialState = {
  todoList: parsedTasks || [],
  todoFiltered: [],
};

const todo = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
        status: 'active',
        color: '',
      };
      state.todoList.push(newTodo);
    },
    removeTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (item) => item.id !== action.payload.id
      );
    },
    toggleComplete: (state, action) => {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index].completed = !state.todoList[index].completed;
      state.todoList[index].status = state.todoList[index].completed
        ? 'completed'
        : 'active';
    },
    saveColor: (state, action) => {
      const index = state.todoList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.todoList[index].color = action.payload.color;
    },
    markAllCompleted: (state) => {
      state.todoList.forEach((item) => {
        item.completed = true;
        item.status = 'completed';
      });
    },
    markAllIncomplete: (state) => {
      state.todoList.forEach((item) => {
        item.completed = false;
        item.status = 'active';
      });
    },
    clearCompleted: (state) => {
      state.todoList = state.todoList.filter((item) => item.completed !== true);
    },
    filterStatus: (state, action) => {
      state.todoFiltered = state.todoList.filter(
        (item) => item.status === action.payload
      );
    },
    filterColor: (state, action) => {
      console.log(action.payload);
      state.todoFiltered = state.todoList.filter((item) =>
        action.payload.includes(item.color)
      );
    },
  },
});

export const {
  saveTodo,
  removeTodo,
  toggleComplete,
  saveColor,
  markAllCompleted,
  clearCompleted,
  markAllIncomplete,
  filterStatus,
  filterColor,
} = todo.actions;

export const selectTodo = (state) => state.todo;

export default todo.reducer;
