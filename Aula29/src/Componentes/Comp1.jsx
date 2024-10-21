import { useState } from 'react';
import styles from './Comp1.module.css';

function Comp1(usuario) {
console.log(usuario)
    
let [nome, setNome] = useState ('')
let [idade, setIdade] = useState ('')
let [profissao, setProfissao] = useState ('')
let clicou = false

function mostrarUsuario(){
setNome(usuario.nome)
setIdade(usuario.idade)
setProfissao(usuario.profissao)
clicou = true
}

    return (
        <>
            <button onClick={mostrarUsuario} type='button'>Mostrar Usuario</button>
            
            {clicou && (
                <p>
                    nome:
            </p>
            )}
        </>
    );
}

export default Comp1;