import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BuscarCep from './Componentes/BuscarCep'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Olá mundo</h1>
      <p>Primeiro paragrafo</p>
      <BuscarCep/>
    </>
  )
}

export default App
