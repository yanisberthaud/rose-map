import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/CarteOctobreRose.jsx'
import CarteOctobreRose from './components/CarteOctobreRose'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center', color: '#d63384', margin: '1rem' }}>
        🌸 Octobre Rose en Hauts-de-France
        </h1>
        <CarteOctobreRose />
      </div>
    </>
  )
}

export default App
