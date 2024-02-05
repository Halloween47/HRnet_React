import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateEmployee from './pages/createemployee'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateEmployee />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
