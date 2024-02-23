function City({ setCity }) {
  return (
    <>
      <label htmlFor="city">Ville</label>
      <input id="city" onChange={(e) => setCity(e.target.value)} type="text" />
    </>
  )
}
export default City
