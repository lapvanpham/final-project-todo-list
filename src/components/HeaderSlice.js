import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}


export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchTask: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchTask } = searchSlice.actions

export default searchSlice.reducer