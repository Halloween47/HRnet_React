import { useState } from 'react'

function ZipCode() {
  const [zipCode, setZipCode] = useState('')

  return (
    <>
      <label htmlFor="zip-code">Zip Code</label>
      <input
        id="zip-code"
        value={zipCode}
        onChange={(e) => setZipCode(e.target.value)}
        type="number"
      />
    </>
  )
}
export default ZipCode
