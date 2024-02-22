import { useState } from 'react'
import { useDispatch } from 'react-redux'
import Select from 'react-select'
import { addDepartement } from '../store/employees'

function Departement() {
  const [departement, setDepartement] = useState('')

  const optionsDepartements = [
    { value: 'sales', label: 'Sales' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'human resources', label: 'Human Resources' },
    { value: 'legal', label: 'Legal' },
  ]
  const handleChangeSelectDepartement = (selectedOption) => {
    console.log(selectedOption.value)
    setDepartement(selectedOption.value)
  }

  const dispatch = useDispatch()
  dispatch(addDepartement(departement))

  return (
    <>
      <label htmlFor="department">Departement :</label>
      <Select
        options={optionsDepartements}
        onChange={handleChangeSelectDepartement}
      />
    </>
  )
}
export default Departement
