import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee } from '../store/employees'

// import Modal from './modal.jsx'
import { Modal } from 'oc-wh-modal'

function Save() {

  const [showModal, setShowModal] = useState(false)
  const [etatModal, setEtatModal] = useState(null)

  const dispatch = useDispatch()
  const store = useSelector((state) => state.employees)
  const firstName = useSelector((state) => state.employees.firstname)
  const lastName = useSelector((state) => state.employees.lastname)
  const dateOfBirth = useSelector((state) => state.employees.dateOfBirth)
  const startDate = useSelector((state) => state.employees.startDate)
  const street = useSelector((state) => state.employees.street)
  const city = useSelector((state) => state.employees.city)
  const state = useSelector((state) => state.employees.state)
  const zipCode = useSelector((state) => state.employees.zipCode)
  const departement = useSelector((state) => state.employees.departement)
  console.log(store)

  function saveEmployee() {
    console.log('Bouton SAVE marche')
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      dateOfBirth !== 'dd MMMM yyyy' &&
      startDate !== 'dd MMMM yyyy' &&
      street.trim() &&
      city.trim() &&
      state !== '' &&
      zipCode !== '' &&
      departement !== ''
    ) {
      console.log('Form OK')
      const newEmployee = {
        firstName,
        lastName,
        dateOfBirth,
        departement,
        street,
        city,
        state,
        zipCode,
        startDate,
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
      <button onClick={saveEmployee} className="button-save">
        Enregistrer
      </button>

      {showModal && <Modal onClose={closeModal} etat={etatModal} />}
    </>
  )
}
export default Save
