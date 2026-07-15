import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Interns from './Interns'
import ShubhangApp from './shubhang/ShubhangApp'
import RishitaApp from './rishita/dashboard/src/App'
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

export default App
