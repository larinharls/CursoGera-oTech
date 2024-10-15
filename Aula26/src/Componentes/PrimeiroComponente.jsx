// function PrimeiroComponente(){

//     let pessoas = [{
//         nome: 'Carlos',
//         idade: '25',
//         profissao: 'Programador',
//     }, {
//         nome: 'Ana',
//         idade: 25,
//         profissao: 'Engenheira'
//     }]

//     function enviaNome() {
//         let nome = document.getElementById('nome').value
//         let ola2= document.createElement('h1')
//         ola2.innerHTML = `Olá ${nome}, tudo bem?`
//         document.getElementById('ola').appendChild(ola2)
//     }

//     return (
//         <>
//             {/* <h1>Olá {pessoas[1].nome}, tudo bem?</h1> */}
//             <input id="nome" type="text" placeholder="Digite seu nome" />
//             <button onClick={enviaNome} type="button">Enviar</button>
//             <div id= "ola">
                
//             </div>
//         </>
//     )
// }

// export default PrimeiroComponente