import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFirstName } from '../store/employees'

function Firstname() {
  const [firstName, setFirstname] = useState('')

  const dispatch = useDispatch()
  dispatch(addFirstName(firstName))

  return (
    <>
      <label htmlFor="first-name">Prénom</label>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstname(e.target.value)}
        id="first-name"
      />
    </>
  )
}
export default Firstname
