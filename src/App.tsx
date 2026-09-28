import { BrowserRouter, Link, Route, Routes } from 'react-router'

import Dashboard from './pages/Dashboard'
import Jobs from './pages/Jobs'

function App() {
  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/jobs">Jobs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<Jobs />} />
      </Routes>

    </BrowserRouter>
  )
}


export default App
