import { Link } from 'react-router-dom'
import '../css/employelist.css'
import Table from '../components/dataTable'

// import Table from '../components/table.tsx'

function EmployeList() {
  return (
    <>
      <div id="employee-div" className="container">
        <h1>
          Employées actuellement
          <br /> en poste
        </h1>
        <Link to="/">Retour page d'accueil</Link>
        <Table />
      </div>
    </>
  )
}
export default EmployeList
