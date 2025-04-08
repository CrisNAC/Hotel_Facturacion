import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inicio from './components/inicio.jsx'
import NavBar from './components/navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar></NavBar>
      <Inicio></Inicio>
    </>
  )
}

export default App
