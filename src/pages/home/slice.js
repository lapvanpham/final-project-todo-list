import { createSlice } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'

const initialState = [
  {
    id: 1,
    title: 'Buy milk',
    addedDate: new Date().toJSON(),
    dueDate: new Date().toJSON(),
    completed: false,
  },
  {
    id: 2,
    title: 'Repair the laptop',
    addedDate: new Date().toJSON(),
    dueDate: new Date().toJSON(),
    completed: true,
  },
  {
    id: 3,
    title: 'Do chores',
    addedDate: new Date().toJSON(),
    dueDate: new Date().toJSON(),
    completed: false,
  }
]

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        title: action.payload.title,
        addedDate: action.payload.addedDate,
        dueDate: action.payload.dueDate,
        completed: false,
      }
      state.push(newTask)
    },
    toggleCompleted: (state, action) => {
      const index = state.findIndex(
        (task) => task.id === action.payload.id
      )
      state[index].completed = action.payload.completed;
    },
    deleteTask: (state, action) => {
      return state.filter(task => (task.id !== action.payload.id))
    },
    editTask: (state, action) => {
      const index = state.findIndex((task) => (task.id === action.payload.id));
      state[index].title = action.payload.title;
    }
  }
})

export const { addTask, toggleCompleted, deleteTask, editTask } = tasksSlice.actions;

export default tasksSlice.reducer;