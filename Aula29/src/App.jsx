import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Componentes/Comp1'

function App() {

  let cor = 'purple'
  let esp = '10px'

  let nome = ''
  let idade = ''
  let profissao = ''

  function carregarDados(){
  nome = document.getElementById('nome').value
  idade = document.getElementById('idade').value
  profissao = document.getElementById('profissao').value
  }
  
  return (
    <>
      {/* <h1>Títulos</h1>
      <input type="text" placeholder='Digite a cor'/><br/>
      <Comp1 cor ={cor} estilo ='solid' esp={esp}/> */}
      <br/>

      <input id='nome' type="text" placeholder='Digite seu nome'/><br/>
      <input type="idade" placeholder='Digite sua idade'/><br/>
      <input type="profissao" placeholder='Digite sua profissão'/><br/>
      <button onClick={carregarDados} type='button'>Enviar</button>

      <Comp1 nome={nome} idade={idade} profissao={profissao}/>
    </>
  )
}

export default App
