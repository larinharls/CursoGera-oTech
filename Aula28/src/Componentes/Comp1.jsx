import { useState } from 'react'
import styles from './Comp1.module.css'

function Comp1(){
    let Imagens = ['jacob.jpg', 'bella.jpg']
    // let Imagens2 = ['jacob.jpg', 'bella.jpg']
    let [imgAtual, setImgAtual] = useState(Imagens[0])

    // let [tamanho, setTam] = useState(200)
    // function aumento(){
    //     setTam(tamanho+50)
    // }

    // let [imgAt2, setImgAt2] = useState(Imagens2[0])

    // function trocarImagem{
        // if(imgAt2 == Imagens2[0]){
        //     setImgAt2(Imagens2[1])
        // }else{
        //     setImgAt2(Imagens2[0])
        // }
        
    // }
    
    return(
        <>
            <h2>Principais Hooks</h2>
            <ul className={styles.Lista}>
                <li>useState</li>
                <li>useEfect</li>
                <li>useContext</li>
                <li>useReducer</li>
                <li>useMemo</li>
                <li>useCallback</li>
            </ul>

            <h2>useState</h2>
            <img onClick={
                () => {
                    imgAtual == Imagens[0] ? setImgAtual(Imagens[1]) : 
                    setImgAtual(Imagens[0])
                }
            } src={imgAtual} alt='' width={'500px'} />

            {/* <img src='jacob.jpg' width={`${200}px`}/> 
            <button onClick={aumento}>Aumentar</button>
            <button onClick={reduz}>Reduzir</button> */}
            
            {/* <img onClick={trocarImagem} src={imgAt2} alt='' /> */}

        </>
    )
}

export default Comp1