import { BrowserRouter, Route, Routes } from 'react-router'

import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>

      <Navbar />



      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>

    </BrowserRouter>
  )
}


export default App
