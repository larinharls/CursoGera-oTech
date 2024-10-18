import { useState } from 'react'
import styles from './Comp1.module.css'

function Comp1 ({cor, estilo, esp}){

    let borde = {border:`${cor} ${estilo} ${esp}`}

    let borda1 = {border:'solid 1px blue'}
    let borda2 = {border:'solid 1px red'}

    let [borda, setBorda] = useState(borda1)

    function alterarBorda(){
        if(borda.border == borda1.border){
            setBorda(borda2)
        }else{
            setBorda(borda1)
        }

    }
    return(
        <>
        {/* <p style={borde}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dignissimos blanditiis delectus, doloribus beatae, commodi ducimus illum quo quod quos nam animi recusandae et molestias velit aut quia rerum vel?</p>
        <button onClick={alterarBorda}>Alterar Bordas</button> */}
        </>
    )
}

export default Comp1