import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  itemsList: [],
  name: '',
  id: '',
};

const todo = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.name = action.payload.name;
      state.id++;
      state.itemsList.push(action.payload.item);
    },
  },
});

export const { saveTodo } = todo.actions;
export const selectTodoList = (state) => state.todo.itemsList;
export default todo.reducer;
