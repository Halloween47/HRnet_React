import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { useDispatch } from 'react-redux'
import { addStartDate } from '../store/employees'

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

  const dispatch = useDispatch()
  dispatch(addStartDate(startDateFormat))

  return (
    <>
      <label htmlFor="start-date">Start Date</label>
      <DatePicker
        showIcon
        selected={startDate}
        onChange={handleDateChangeStarDate}
        dateFormat={'dd MMMM yyyy'}
        placeholderText="Séléctionnez une date"
      />
    </>
  )
}
export default StartDate
