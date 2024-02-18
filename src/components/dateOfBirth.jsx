import { useState } from 'react'
import DatePicker from 'react-datepicker'

import fr from 'date-fns/locale/fr'

function DateOfBirth() {
  const [dateOfBirth, setDateOfBirth] = useState(null)
  const [dateOfBirthFormat, setDateOfBirthFormat] = useState('dd MMMM yyyy') // Format de date par défaut

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
      <label htmlFor="date-of-birth">Date of Birth</label>
      <DatePicker
        dateFormat={'dd MMMM yyyy dd'}
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
