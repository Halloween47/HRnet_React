function Lastname({ setLastName }) {
  const handleInputChange = (e) => {
    const value = e.target.value
    setLastName(value)
  }

  return (
    <>
      <label htmlFor="last-name">Nom</label>
      <input type="text" onChange={handleInputChange} id="last-name" />
    </>
  )
}
export default Lastname
