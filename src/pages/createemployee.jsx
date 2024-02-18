import { Link } from 'react-router-dom'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { addEmployee } from '../store/employees'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import fr from 'date-fns/locale/fr'

import Select from 'react-select'
import Modal from '../components/modal'

function CreateEmployee() {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [dateOfBirthFormat, setDateOfBirthFormat] = useState('dd MMMM yyyy') // Format de date par défaut
  const [dateOfBirthValueId, setDateOfBirthValueId] = useState('')
  const [startDate, setStartDate] = useState(null)
  const [startDateFormat, setStartDateFormat] = useState('dd MMMM yyyy') // Format de date par défaut
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [departement, setDepartement] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [etatModal, setEtatModal] = useState(null)
  const [isValidForm, setIsValidForm] = useState(false)

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
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'human resources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' },
  ]

  const closeModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    const valueState = document.getElementsByClassName(
      ' css-1dimb5e-singleValue',
    )
    console.log(valueState)
  }, [dateOfBirthValueId, dateOfBirth])

  const handleChangeSelectState = (selectedOption) => {
    console.log(selectedOption.value)
    setState(selectedOption.value)
  }

  const handleChangeSelectDepartement = (selectedOption) => {
    console.log(selectedOption.value)
    setDepartement(selectedOption.value)
  }

  const handleDateChangeBirth = (date) => {
    setDateOfBirth(date)
    const formattedDate = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    setDateOfBirthFormat(formattedDate)
  }

  const handleDateChangeStarDate = (date) => {
    setStartDate(date)
    const formattedDate = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    setStartDateFormat(formattedDate)
  }

  function saveEmployee() {
    console.log('ça marche')
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      dateOfBirthFormat !== 'dd MMMM yyyy' &&
      startDateFormat !== 'dd MMMM yyyy' &&
      street.trim() !== '' &&
      city.trim() &&
      state !== '' &&
      zipCode !== '' &&
      departement !== ''
    ) {
      console.log('Form OK')

      const newEmployee = {
        firstName,
        lastName,
        // dateOfBirth,
        dateFormat: dateOfBirthFormat,
        startDateFormat,
        departement,
        street,
        city,
        state,
        zipCode,
      }

      dispatch(addEmployee(newEmployee))
      setShowModal(true)
      setEtatModal(true)
    } else {
      console.log('Form PAS OK')
      setShowModal(true)
      setEtatModal(false)
    }
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
          <DatePicker
            dateFormat={'dd MMMM yyyy dd'}
            placeholderText="Séléctionnez une date"
            selected={dateOfBirth}
            onChange={handleDateChangeBirth}
            id="date-of-birth"
            locale={fr}
          />

          <label htmlFor="start-date">Start Date</label>
          <DatePicker
            showIcon
            selected={startDate}
            onChange={handleDateChangeStarDate}
            dateFormat={'dd MMMM yyyy dd'}
            placeholderText="Séléctionnez une date"
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
            <Select
              options={optionsState}
              id="stateValue"
              onChange={handleChangeSelectState}
            />

            <label htmlFor="zip-code">Zip Code</label>
            <input
              id="zip-code"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              type="number"
            />
          </fieldset>
          <label htmlFor="department">Department</label>
          <Select
            options={optionsDepartements}
            onChange={handleChangeSelectDepartement}
          />
        </form>
        <button onClick={saveEmployee}>Save</button>
        {showModal && <Modal onClose={closeModal} etat={etatModal} />}
      </div>
    </>
  )
}
export default CreateEmployee
