import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCity } from '../store/employees'

function City() {
  const [city, setCity] = useState('')

  const dispatch = useDispatch()
  dispatch(addCity(city))

  return (
    <>
      <label htmlFor="city">Ville</label>
      <input
        id="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
      />
    </>
  )
}
export default City
