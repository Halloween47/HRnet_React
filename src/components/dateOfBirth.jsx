import { useState } from 'react'
import DatePicker from 'react-datepicker'

import fr from 'date-fns/locale/fr'

function DateOfBirth({ setDateOfBirthFormat }) {
  const [dateOfBirth, setDateOfBirth] = useState(null)

  const handleDateChangeBirth = (date) => {
    setDateOfBirth(date)
    const formattedDate = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    setDateOfBirthFormat(formattedDate)
  }

  return (
    <>
      <label htmlFor="date-of-birth">Date de naissance</label>
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
