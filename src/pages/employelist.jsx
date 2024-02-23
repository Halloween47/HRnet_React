import { Link } from 'react-router-dom'
import '../css/employelist.css'
import Table from '../components/dataTable'

function EmployeList() {
  return (
    <div className='page_employe-list'>
      <div id="employee-div" className="container">
        <h1>
          Employées actuellement
          <br /> en poste
        </h1>
        <Link to="/">Retour page d'accueil</Link>
        <Table />
      </div>
    </div>
  )
}
export default EmployeList
