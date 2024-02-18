import { useState } from 'react'
import Select from 'react-select'

function State() {
  const [startDate, setStartDate] = useState(null)
  const [startDateFormat, setStartDateFormat] = useState('dd MMMM yyyy') // Format de date par défaut
  const [state, setState] = useState('')

  const optionsState = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
  ]
  const handleDateChangeStarDate = (date) => {
    setStartDate(date)
    const formattedDate = date.toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    setStartDateFormat(formattedDate)
  }

  const handleChangeSelectState = (selectedOption) => {
    console.log(selectedOption.value)
    setState(selectedOption.value)
  }

  return (
    <>
      <label htmlFor="state">State</label>
      <Select
        options={optionsState}
        id="stateValue"
        onChange={handleChangeSelectState}
      />
    </>
  )
}
export default State
