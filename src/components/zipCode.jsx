function ZipCode({ setZipCode }) {
  return (
    <>
      <label htmlFor="zip-code">Zip Code</label>
      <input
        id="zip-code"
        onChange={(e) => setZipCode(e.target.value)}
        type="number"
      />
    </>
  )
}
export default ZipCode
