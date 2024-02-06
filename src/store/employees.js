import { createSlice } from '@reduxjs/toolkit'

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload)
    },
  },
})
export default employeesSlice.reducer
export const { addEmployee } = employeesSlice.actions
