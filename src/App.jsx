import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer.jsx'
import CarteOctobreRose from './components/CarteOctobreRose.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CarteOctobreRose />
      <Footer />
    </>
  )
}

export default App
