function Firstname({ setFirstName }) {
  const handleInputChange = (e) => {
    const value = e.target.value
    setFirstName(value)
  }

  return (
    <>
      <label htmlFor="first-name">Prénom</label>
      <input type="text" onChange={handleInputChange} id="first-name" />
    </>
  )
}
export default Firstname
