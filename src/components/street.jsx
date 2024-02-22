import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStreet } from '../store/employees'

function Street() {
  const [street, setStreet] = useState('')

  const dispatch = useDispatch()
  dispatch(addStreet(street))

  return (
    <>
      <label htmlFor="street">Rue</label>
      <input
        id="street"
        value={street}
        onChange={(e) => setStreet(e.target.value)}
        type="text"
      />
    </>
  )
}
export default Street
