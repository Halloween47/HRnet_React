import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addZipCode } from '../store/employees'

function ZipCode() {
  const [zipCode, setZipCode] = useState('')

  const dispatch = useDispatch()
  dispatch(addZipCode(zipCode))

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
