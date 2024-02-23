import { useState } from 'react'
import Select from 'react-select'

function State({ setState }) {
  const optionsState = [
    { value: 'Alabama', label: 'Alabama' },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'Arizona', label: 'Arizona' },
    { value: 'Arkansas', label: 'Arkansas' },
    { value: 'California', label: 'California' },
  ]

  const handleChangeSelectState = (selectedOption) => {
    console.log(selectedOption.value)
    setState(selectedOption.value)
  }

  return (
    <>
      <label htmlFor="state">Etat</label>
      <Select
        options={optionsState}
        id="stateValue"
        onChange={handleChangeSelectState}
      />
    </>
  )
}
export default State
