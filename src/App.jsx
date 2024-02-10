import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateEmployee from './pages/createemployee'
import EmployeList from './pages/employelist.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
        <Route path="/employeList" element={<EmployeList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
