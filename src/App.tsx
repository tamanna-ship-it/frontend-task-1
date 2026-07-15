import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Interns from './Interns'
import ShubhangApp from './shubhang/ShubhangApp'
import KranthiApp from './kranthi/KranthiApp'
import RishitaApp from './rishita/RishitaApp'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Interns />} />
        <Route path="/shubhang/*" element={<ShubhangApp />} />
        <Route path="/kranthi/*" element={<KranthiApp />} />
        <Route path="/rishita/*" element={<RishitaApp />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App