import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Hero from './pages/Hero';
import About  from './pages/About';
import ConnectWallet from './pages/ConnectWallet';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect-wallet" element={<ConnectWallet />} />
      </Routes>
    </div>
  )
}

export default App;