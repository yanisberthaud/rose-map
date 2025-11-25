import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer.jsx'
import CarteOctobreRose from './components/CarteOctobreRose.jsx'
import Nav from './components/nav.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    // Utiliser un seul élément parent <div>
    <div className="app-container">
      <Nav />
      <CarteOctobreRose />
      <Footer />
    </div>
  )
}

export default App