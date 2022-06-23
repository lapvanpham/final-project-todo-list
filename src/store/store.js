import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../pages/home/slice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    // displayedTasks: displayedTaskedReducer,
  },
});
