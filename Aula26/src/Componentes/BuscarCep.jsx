function BuscarCep(){
    let cepDigitado = document.getElementById("cep").value
    


    return (
        <>
            <input id="cep" type="text" placeholder="Digite seu cep" />
            <button onClick={BuscarCep} type="button">Enviar</button>
        
        </>

    )

}

export default BuscarCep