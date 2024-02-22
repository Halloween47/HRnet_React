import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addEmployee, addLastName } from '../store/employees'

function Lastname() {
  const [lastName, setLastname] = useState('')

  const dispatch = useDispatch()
  dispatch(addLastName(lastName))

  return (
    <>
      <label htmlFor="last-name">Nom</label>
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastname(e.target.value)}
        id="last-name"
      />
    </>
  )
}
export default Lastname
