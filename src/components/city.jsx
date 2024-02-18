import { useState } from 'react'

function City() {
  const [city, setCity] = useState('')

  return (
    <>
      <label htmlFor="city">City</label>
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
