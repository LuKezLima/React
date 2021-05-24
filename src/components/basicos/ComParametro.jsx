import React from 'react'

function Comparametro(props){
  const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    return (
        <div>
                <h1>{props.titulo}</h1>
                <h2> {props.aluno}</h2>
                <h3>Nota: {props.nota}</h3>
                <h4>Situação: {status}</h4>
        </div>
    )
}


export default Comparametro;