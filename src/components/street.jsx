import { useState } from 'react'

function Street() {
  const [street, setStreet] = useState('')

  return (
    <>
      <label htmlFor="street">Street</label>
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
