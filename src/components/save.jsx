import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee } from '../store/employees'

import Modal from '../components/modal'

function Save() {
  const [firstName, setFirstname] = useState('')
  const [lastName, setLastname] = useState('')
  const [dateOfBirthFormat, setDateOfBirthFormat] = useState('dd MMMM yyyy') // Format de date par défaut
  const [startDateFormat, setStartDateFormat] = useState('dd MMMM yyyy') // Format de date par défaut
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const [departement, setDepartement] = useState('')
  const [zipCode, setZipCode] = useState('')

  const [showModal, setShowModal] = useState(false)
  const [etatModal, setEtatModal] = useState(null)

  const dispatch = useDispatch()
  const employeesList = useSelector((state) => state.employees.list)

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

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <button onClick={saveEmployee}>Save</button>
      {showModal && <Modal onClose={closeModal} etat={etatModal} />}
    </>
  )
}
export default Save
