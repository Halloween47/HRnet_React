import { useState } from 'react'
import DatePicker from 'react-datepicker'

function StartDate() {
  const [startDate, setStartDate] = useState(null)
  const [startDateFormat, setStartDateFormat] = useState('dd MMMM yyyy') // Format de date par défaut

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
      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={handleDateChangeStarDate}
        dateFormat={'dd MMMM yyyy dd'}
        placeholderText="Séléctionnez une date"
      />
    </>
  )
}
export default StartDate
