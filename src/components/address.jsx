import City from './city'
import State from './state'
import Street from './street'
import ZipCode from './zipCode'

function Address({ setState, setStreet, setCity, setZipCode }) {
  return (
    <>
      <fieldset className="address">
        <legend>Adresse</legend>
        <Street setStreet={setStreet} />
        <City setCity={setCity} />
        <State setState={setState} />
        <ZipCode setZipCode={setZipCode} />
      </fieldset>
    </>
  )
}
export default Address
