import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Componentes/Comp1'

function App() {
  let [mostrar, setMostrar] = useState(false)
  let [msgBtn, setMsgBtn] = useState('Mostrar Parágrafo')

  function mostrarParagrafo(){
    if (mostrar == true){
      setMostrar(false)
      setMsgBtn('Mostrar parágrafo')
    }else{
      setMostrar(true)
      setMsgBtn('Esconder parágrafo')
    }
  }
  
  return (
    <>
      <button onClick={mostrarParagrafo}>{msgBtn}</button>
      {mostrar && (
        <div>
          <h2>Dormir</h2>
          <img src='https://th.bing.com/th/id/OIP.pOLC50CDMJype-ZeZXBM1wHaFZ?w=289&h=211&c=7&r=0&o=5&pid=1.7' alt='' width={'500px'}></img>
        </div>
      )}
      <Comp1/>
    </>
  )
}

export default App
