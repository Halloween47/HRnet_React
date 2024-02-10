import { Link } from 'react-router-dom'
import Table from '../components/table.tsx'

function EmployeList() {
  return (
    <>
      <div id="employee-div" className="container">
        <h1>Current Employees</h1>
        <Link to="/">Home</Link>
        <Table />
      </div>
    </>
  )
}
export default EmployeList
