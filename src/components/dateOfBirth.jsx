import { useState } from 'react'
import DatePicker from 'react-datepicker'

import fr from 'date-fns/locale/fr'
import { useDispatch } from 'react-redux'
import { addDateOfBirth } from '../store/employees'

function DateOfBirth() {
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [dateOfBirthFormat, setDateOfBirthFormat] = useState('dd MMMM yyyy')

  const handleDateChangeBirth = (date) => {
    setDateOfBirth(date)
    const formattedDate = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    setDateOfBirthFormat(formattedDate)
  }

  const dispatch = useDispatch()
  // dispatch(addEmployee(firstName))
  dispatch(addDateOfBirth(dateOfBirthFormat))

  return (
    <>
      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        dateFormat={'dd MMMM yyyy'}
        placeholderText="Séléctionnez une date"
        selected={dateOfBirth}
        onChange={handleDateChangeBirth}
        id="date-of-birth"
        locale={fr}
      />
    </>
  )
}
export default DateOfBirth
