import { configureStore } from '@reduxjs/toolkit'
import useReducerEmployees from './employees'

const store = configureStore({
  reducer: {
    employees: useReducerEmployees,
  },
})

export default store
