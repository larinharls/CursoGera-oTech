import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Componente1 from './componentes/Componente1'
import Imagens from './Imagens'

function App() {
  let estiloTitulo3 = {
    backgroundColor:'red',
    color:'blue'
  }

  let azul = true

  let estiloBotao = {
    backgroundColor: azul == true ? 'blue':'gray',
    color:'white',
    padding: '10px'
  }

  return (
    <>
      <div>
        <h1>Aula 27</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non laborum vitae quas quae, consectetur a quidem nesciunt pariatur, natus ad beatae aut, eligendi debitis animi corporis vel quisquam facilis. Et.</p>

        <h1>Título 2</h1>
        <p className='paragrafo1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam sequi iste nemo ratione, totam animi quos, at magnam illum mollitia, earum saepe delectus aut deserunt culpa qui aspernatur odit distinctio.</p>
      </div>
      <Componente1/>
      {/*CSS inline*/}

      <h1 style={estiloTitulo3}>Título 3</h1>
      
      <p style={{backgroundColor:'gray',color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum optio ab nobis quis corrupti aut beatae, blanditiis facilis provident officia omnis inventore. Labore saepe magni eaque quo officiis, blanditiis rerum.</p>
      <Imagens/>

      <button style={estiloBotao}>Click aqui</button>
    </>
  )
}

export default App
