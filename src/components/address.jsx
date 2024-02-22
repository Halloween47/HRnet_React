import City from './city'
import State from './state'
import Street from './street'
import ZipCode from './zipCode'

function Address() {
  return (
    <>
      <fieldset className="address">
        <legend>Adresse</legend>
        <Street />
        <City />
        <State />
        <ZipCode />
      </fieldset>
    </>
  )
}
export default Address
