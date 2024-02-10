import { Link } from 'react-router-dom'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { addEmployee } from '../store/employees'

function CreateEmployee() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [startDate, setStartDate] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [zipCode, setZipCode] = useState('')

  const dispatch = useDispatch()
  const employeesList = useSelector((state) => state.employees.list)
  console.log(employeesList)

  function saveEmployee() {
    const newEmployee = {
      firstname,
      lastname,
      dateOfBirth,
      startDate,
      street,
      city,
      zipCode,
    }
    dispatch(addEmployee(newEmployee))
    console.log(employeesList)
  }

  return (
    <>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employeList">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action="#" id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            id="first-name"
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            id="last-name"
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="text"
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            type="text"
          />
          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input
              id="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              type="text"
            />

            <label htmlFor="city">City</label>
            <input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              type="text"
            />

            <label htmlFor="state">State</label>
            <select name="state" id="state"></select>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              type="number"
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </form>
        <button onClick={saveEmployee}>Save</button>
      </div>
      <div id="confirmation" className="modal">
        Employee Created!
      </div>
    </>
  )
}
export default CreateEmployee
