import { Link } from 'react-router-dom'
import '../App.css'
import 'react-datepicker/dist/react-datepicker.css'
import Firstname from '../components/firstname'
import Lastname from '../components/lastname'
import DateOfBirth from '../components/dateOfBirth'
import StartDate from '../components/startDate'
import Address from '../components/address'
import Departement from '../components/departement'
import Save from '../components/save'

function CreateEmployee() {
  return (
    <>
      <div className="page-creation">
        <div className="page-creation-titre">
          <svg
            id="page-titre-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#5000ca"
              fillOpacity="0.28"
              d="M0,128L0,320L62.6,320L62.6,224L125.2,224L125.2,288L187.8,288L187.8,64L250.4,64L250.4,288L313,288L313,96L375.7,96L375.7,160L438.3,160L438.3,32L500.9,32L500.9,160L563.5,160L563.5,192L626.1,192L626.1,128L688.7,128L688.7,192L751.3,192L751.3,96L813.9,96L813.9,0L876.5,0L876.5,128L939.1,128L939.1,224L1001.7,224L1001.7,96L1064.3,96L1064.3,224L1127,224L1127,256L1189.6,256L1189.6,96L1252.2,96L1252.2,160L1314.8,160L1314.8,96L1377.4,96L1377.4,320L1440,320L1440,0L1377.4,0L1377.4,0L1314.8,0L1314.8,0L1252.2,0L1252.2,0L1189.6,0L1189.6,0L1127,0L1127,0L1064.3,0L1064.3,0L1001.7,0L1001.7,0L939.1,0L939.1,0L876.5,0L876.5,0L813.9,0L813.9,0L751.3,0L751.3,0L688.7,0L688.7,0L626.1,0L626.1,0L563.5,0L563.5,0L500.9,0L500.9,0L438.3,0L438.3,0L375.7,0L375.7,0L313,0L313,0L250.4,0L250.4,0L187.8,0L187.8,0L125.2,0L125.2,0L62.6,0L62.6,0L0,0L0,0Z"
            ></path>
          </svg>
          <div className="title">
            <h1>HRnet</h1>
            <Link to="/employeList">Voir la liste des employées actuelles</Link>
          </div>
        </div>
        <div className="page-creation-form">
          <div className="page-creation-form-container">
            <h2>Enregistrer un nouvel employé</h2>
            <form action="#" id="create-employee">
              <div className="form-partie-1">
                <Firstname />
                <Lastname />
                <DateOfBirth />
                <StartDate />
                <Departement />
              </div>
              <div className="form-partie-2">
                <Address />
              </div>
            </form>
            <div className="form-partie-save">
              <Save />
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            id="form-svg"
          >
            <path
              fill="#5000ca"
              fillOpacity="0.28"
              d="M0,256L0,0L75.8,0L75.8,96L151.6,96L151.6,128L227.4,128L227.4,192L303.2,192L303.2,32L378.9,32L378.9,224L454.7,224L454.7,32L530.5,32L530.5,64L606.3,64L606.3,256L682.1,256L682.1,288L757.9,288L757.9,224L833.7,224L833.7,288L909.5,288L909.5,256L985.3,256L985.3,32L1061.1,32L1061.1,160L1136.8,160L1136.8,64L1212.6,64L1212.6,256L1288.4,256L1288.4,224L1364.2,224L1364.2,256L1440,256L1440,320L1364.2,320L1364.2,320L1288.4,320L1288.4,320L1212.6,320L1212.6,320L1136.8,320L1136.8,320L1061.1,320L1061.1,320L985.3,320L985.3,320L909.5,320L909.5,320L833.7,320L833.7,320L757.9,320L757.9,320L682.1,320L682.1,320L606.3,320L606.3,320L530.5,320L530.5,320L454.7,320L454.7,320L378.9,320L378.9,320L303.2,320L303.2,320L227.4,320L227.4,320L151.6,320L151.6,320L75.8,320L75.8,320L0,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}
export default CreateEmployee
