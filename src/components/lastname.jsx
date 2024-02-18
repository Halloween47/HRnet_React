import { useState } from 'react'

function Lastname() {
  const [lastName, setLastname] = useState('')

  return (
    <>
      <label htmlFor="last-name">Last Name</label>
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
