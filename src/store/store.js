import { configureStore } from '@reduxjs/toolkit'
import useReducerEmployees from './employees'
import { AppState } from './types.ts'

const store = configureStore({
  reducer: {
    employees: useReducerEmployees,
  },
})

export default store
