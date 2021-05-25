import React from 'react'


function Aleatorio(props) {
    const min = props.min
    const max = props.max

    const random = (min,max) =>{
        let numRandom = 0;
        numRandom = Math.random() * (max-min) + min
        return numRandom.toFixed(2)
    }

    return (
        <div id="aleatorio">
                <h2>Numero mínimo: {min}</h2>
                <h2>Numero máximo: {max}</h2>
                <h3>Número aleatório: {random(props.min, props.max)}</h3>

        </div>
    )

    
}



export default Aleatorio;