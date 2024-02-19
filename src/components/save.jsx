import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addEmployee } from '../store/employees'

import Modal from '../components/modal'

function Save() {
  //     // const [firstName, setFirstname] = useState('');

  // useEffect(() => {
  //     const firstNameID = document.getElementById('first-name');
  //     // console.log(firstName);
  //     if (firstNameID && typeof firstNameID.value === 'string' && firstNameID.value.trim() !== '') {
  //         console.log('La propriété "value" est définie pour cet élément HTML.');
  //         // setFirstname(firstNameID.value);
  //     } else {
  //         console.log('La propriété "value" n\'est pas définie pour cet élément HTML.');
  //     }
  // }, []);

  // console.log(firstName);
  // const [lastName, setLastname] = useState('')
  const [dateOfBirthFormat, setDateOfBirthFormat] = useState('dd MMMM yyyy') // Format de date par défaut
  const [startDateFormat, setStartDateFormat] = useState('dd MMMM yyyy') // Format de date par défaut
  // const [street, setStreet] = useState('')
  // const [city, setCity] = useState('')
  // const [state, setState] = useState('')
  // const [zipCode, setZipCode] = useState('')
  // const [departement, setDepartement] = useState('')

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
  console.log(firstName)
  console.log(lastName)
  console.log(dateOfBirth)
  console.log(startDate)
  console.log(street)
  console.log(city)
  console.log(state)
  console.log(zipCode)
  console.log(departement)

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
      //   firstName.trim() !== '' &&
      //   lastName.trim() !== '' &&
      //   dateOfBirthFormat !== 'dd MMMM yyyy' &&
      //   startDateFormat !== 'dd MMMM yyyy' &&
      //   street.trim() !== '' &&
      //   city.trim() &&
      //   state !== '' &&
      //   zipCode !== '' &&
      //   departement !== ''
    ) {
      console.log('Form OK')

      const newEmployee = {
        firstName,
        lastName,
            dateOfBirth,
        //     dateFormat: dateOfBirthFormat,
        //     startDateFormat,
            departement,
            street,
            city,
            state,
            zipCode,
            startDate,
      }

      //   dispatch(addEmployee(newEmployee))
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
