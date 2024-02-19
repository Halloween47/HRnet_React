import { createSlice } from '@reduxjs/toolkit'

const employeesSlice = createSlice({
  name: 'employees',
  initialState: {
    list: [],
    firstname: '',
    lastname: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    departement: '',
  },
  reducers: {
    addEmployee: (state, action) => {
      state.list.push(action.payload)
    },
    addFirstName: (state, action) => {
      state.firstname = action.payload
    },
    addLastName: (state, action) => {
      state.lastname = action.payload
    },
    addDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload
    },
    addStartDate: (state, action) => {
      state.startDate = action.payload
    },
    addStreet: (state, action) => {
      state.street = action.payload
    },
    addCity: (state, action) => {
      state.city = action.payload
    },
    addState: (state, action) => {
      state.state = action.payload
    },
    addZipCode: (state, action) => {
      state.zipCode = action.payload
    },
    addDepartement: (state, action) => {
      state.departement = action.payload
    },
  },
})
export default employeesSlice.reducer
export const {
  addEmployee,
  addFirstName,
  addLastName,
  addDateOfBirth,
  addStartDate,
  addStreet,
  addCity,
  addState,
  addZipCode,
  addDepartement,
} = employeesSlice.actions
