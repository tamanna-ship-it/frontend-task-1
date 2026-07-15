import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Interns from './Interns'
import ShubhangApp from './shubhang/ShubhangApp'
<<<<<<< HEAD
import RishitaApp from './rishita/dashboard/src/App'
=======
import RishitaApp from './rishita/RishitaApp'
>>>>>>> d107f67a3b12ff59cd3aadcb9eaab2b6cd262257
import './App.css';
import DetailedReport from './kranthi/DetailedReport'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interns />} />
        <Route path="/shubhang/*" element={<ShubhangApp />} />
        <Route path="/kranthi/*" element={<DetailedReport />} />
        <Route path="/rishita/*" element={<RishitaApp />} />
      </Routes>
    </BrowserRouter>
  )
}

<<<<<<< HEAD
export default App
=======
export default App
>>>>>>> d107f67a3b12ff59cd3aadcb9eaab2b6cd262257
