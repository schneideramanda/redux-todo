import { createSlice } from '@reduxjs/toolkit';
import { filterStatus, filterColor } from './todo';

const initialState = {
  status: {
    All: 'all',
    Active: 'active',
    Completed: 'completed',
  },
  colors: ['green', 'blue', 'orange', 'purple', 'red'],
  selectedColors: [],
  selectedStatus: 'all',
};

const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    selectStatus: (state, action) => {
      state.selectedStatus = action.payload;
    },
    checkColors: (state, action) => {
      if (!state.selectedColors.includes(action.payload)) {
        state.selectedColors.push(action.payload);
      }
    },
    uncheckColors: (state, action) => {
      state.selectedColors = state.selectedColors.filter(
        (color) => color !== action.payload
      );
    },
  },
});

export const { selectStatus, checkColors, uncheckColors } = filters.actions;

export const selectFilters = (state) => state.filters;

export const filterByStatus = () => (dispatch, getState) => {
  const { todo } = getState();
  const { filters } = getState();
  if (todo.length !== 0) {
    dispatch(filterStatus(filters.selectedStatus));
  }
};

export const filterByColor = () => (dispatch, getState) => {
  const { todo } = getState();
  const { filters } = getState();
  if (todo.length !== 0) {
    dispatch(filterColor(filters.selectedColors));
  }
};

export default filters.reducer;
