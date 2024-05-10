import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Nav from './Components/nav'

function App() {

  return (
    <BrowserRouter>
    <Routes>
     
    <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App