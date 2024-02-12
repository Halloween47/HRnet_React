import { Link } from 'react-router-dom'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addEmployee } from '../store/employees'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import fr from 'date-fns/locale/fr'

import Select from 'react-select'

function CreateEmployee() {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  
  const [dateOfBirthValueId, setDateOfBirthValueId] = useState('')
  console.log(dateOfBirthValueId);
  // const [startDate, setStartDate] = useState('')
  const [startDate, setStartDate] = useState(new Date())
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [departement, setDepartement] = useState('')
  const [zipCode, setZipCode] = useState('')
  
  const dispatch = useDispatch()
  const employeesList = useSelector((state) => state.employees.list)
  
  const optionsState = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
  ]

  const optionsDepartements = [
    {value: 'sales', label: 'Sales'},
    {value: 'marketing', label: 'Marketing'},
    {value: 'engineering', label: 'Engineering'},
    {value: 'human resources', label: 'Human Resources'},
    {value: 'legal', label: 'Legal'},
  ]

  function saveEmployee() {
    const newEmployee = {
      firstName,
      lastName,
      dateOfBirth,
      // dateOfBirthValueId,
      // startDate,
      departement,
      street,
      city,
      state,
      zipCode,
    }
    dispatch(addEmployee(newEmployee))
    console.log(employeesList)
  }


  useEffect(() => {
    const valueInputDateOfBirth = document.getElementById('date-of-birth')
    // console.log(valueInputDateOfBirth.value);
    // setDateOfBirthValueId(valueInputDateOfBirth.value)
    const valueState = document.getElementsByClassName(' css-1dimb5e-singleValue');
    console.log(valueState);
  }, [dateOfBirthValueId, dateOfBirth])

  const formatDate = (date) => {
    if (!date) {
      return 'Sélectionnez une date'
    }
    const monthNames = [
      'Janvier',
      'Février',
      'Mars',
      'Avril',
      'Mai',
      'Juin',
      'Juillet',
      'Août',
      'Septembre',
      'Octobre',
      'Novembre',
      'Décembre',
    ]
    const day = date.getDate()
    const monthIndex = date.getMonth()
    const year = date.getFullYear()
    return `${day} ${monthNames[monthIndex]} ${year}`
  }

  const handleChangeSelectState = selectedOption => {
    console.log(selectedOption.value);
    setState(selectedOption.value);
  };

  const handleChangeSelectDepartement = selectedOption => {
    console.log(selectedOption.value);
    setDepartement(selectedOption.value);
  };

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
            value={firstName}
            onChange={(e) => setFirstname(e.target.value)}
            id="first-name"
          />

          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastname(e.target.value)}
            id="last-name"
          />

          <label htmlFor="date-of-birth">Date of Birth</label>
          {/* <DatePicker
            dateFormat={'dd MMMM yyyy'}
            placeholderText="Séléctionnez une date"
            // selected={dateOfBirth}
            onChange={(date) => {
              const dateOfBirthValue = document.getElementById('date-of-birth')
              console.log(date);
              setDateOfBirth(date)
              console.log(dateOfBirthValue.value);
              // console.log(date)
            }}
            id="date-of-birth"
            locale={fr}
            value={dateOfBirth ? formatDate(dateOfBirth) : ''}
          /> */}

          <label htmlFor="start-date">Start Date</label>
          {/* <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          /> */}
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
            {/* <select name="state" id="state"></select> */}
            <Select options={optionsState} id='stateValue' onChange={handleChangeSelectState}/>

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              type="number"
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          {/* <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select> */}
          <Select options={optionsDepartements} onChange={handleChangeSelectDepartement} />
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
