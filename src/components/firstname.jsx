import { useState } from 'react'

function Firstname() {
  const [firstName, setFirstname] = useState('')
  return (
    <>
      <label htmlFor="first-name">First Name</label>
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
