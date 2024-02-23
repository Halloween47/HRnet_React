function Street({ setStreet }) {
  return (
    <>
      <label htmlFor="street">Rue</label>
      <input
        id="street"
        onChange={(e) => setStreet(e.target.value)}
        type="text"
      />
    </>
  )
}
export default Street
