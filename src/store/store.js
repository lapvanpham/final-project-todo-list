import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../pages/home/slice';
import searchReducer from '../components/HeaderSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    search: searchReducer
  },
});
