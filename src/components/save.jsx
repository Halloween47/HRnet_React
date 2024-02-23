import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee } from '../store/employees'

// import Modal from './modal.jsx'
import { Modal } from 'oc-wh-modal'

function Save({
  firstName,
  lastName,
  dateOfBirthFormat,
  startDateFormat,
  state,
  street,
  city,
  zipCode,
  departement,
}) {
  const [showModal, setShowModal] = useState(false)
  const [etatModal, setEtatModal] = useState(null)

  const dispatch = useDispatch()
  const store = useSelector((state) => state.employees)

  function saveEmployee() {
    console.log('Bouton SAVE marche')
    console.log(firstName)
    console.log(dateOfBirthFormat)
    if (
      firstName.trim() !== '' &&
      lastName.trim() !== '' &&
      dateOfBirthFormat !== '' &&
      startDateFormat !== '' &&
      state !== '' &&
      street !== '' &&
      city !== '' &&
      zipCode !== '' &&
      departement !== ''
    ) {
      console.log('Form OK')
      const newEmployee = {
        firstName,
        lastName,
        dateOfBirthFormat,
        startDateFormat,
        state,
        street,
        city,
        zipCode,
        departement,
      }
      dispatch(addEmployee(newEmployee))
      console.log(store)
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
