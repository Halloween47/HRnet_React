import { useState } from 'react'
import DatePicker from 'react-datepicker'
import fr from 'date-fns/locale/fr'

function StartDate({ setStartDateFormat }) {
  const [startDate, setStartDate] = useState(null)

  const handleDateChangeStarDate = (date) => {
    setStartDate(date)
    const formattedDate = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    setStartDateFormat(formattedDate)
  }

  return (
    <>
      <label htmlFor="start-date">date de début</label>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={handleDateChangeStarDate}
        dateFormat={'dd MMMM yyyy'}
        placeholderText="Séléctionnez une date"
        locale={fr}
      />
    </>
  )
}
export default StartDate
