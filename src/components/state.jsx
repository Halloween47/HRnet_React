import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { addState } from '../store/employees'

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

  const dispatch = useDispatch()
  dispatch(addState(state))

  return (
    <>
      <label htmlFor="state">Etat</label>
      <Select
        options={optionsState}
        id="stateValue"
        onChange={handleChangeSelectState}
      />
    </>
  )
}
export default State
