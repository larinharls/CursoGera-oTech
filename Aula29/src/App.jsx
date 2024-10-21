import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Comp1 from './Componentes/Comp1'

function App() {


  let [nome, setNome] = useState ('')
  let [idade, setIdade] = useState ('')
  let [profissao, setProfissao] = useState ('')
  let [usuarioCadastrado, setUsuarioCadastrado] = useState(null)

  function carregarDados(){
  setNome(document.getElementById('nome').value)
  setIdade(document.getElementById('idade').value)
  setProfissao(document.getElementById('profissao').value)

  let cadastro = {
    nome: nome,
    idade: idade,
    profissao: profissao
  }
  setUsuarioCadastrado(cadastro)
  
  console.log(usuarioCadastrado)
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

      {usuarioCadastrado && (<Comp1 usuario = {usuarioCadastrado}/>)}
    </>
  )
}

export default App
