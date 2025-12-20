import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Hero from './pages/Hero';
import About  from './pages/About';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default App;