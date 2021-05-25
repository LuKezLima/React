import React from 'react'

import '/./Users/lucas/OneDrive/Área de Trabalho/React - Study/src/index.css'

function card(props) {

    return (
        <div className='card' >
            <div className="Title">{props.titulo}</div>
            <div className="Contentee" >Conteudo</div>
        </div>
    )
    
}



export default card;