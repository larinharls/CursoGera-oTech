import './Componente1.css'
import styles from './Componente1.module.css'

function Componente1(){
    return(
        <>
            <h1>Título do componente 1</h1>
            <p className={`${styles.primaria} ${styles.fonte}`}>Parágrafo do componente 1</p>
            <p className={styles.secundaria}>Parágrafo do componente 1</p>
        </>
    )
}

export default Componente1