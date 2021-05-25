import React from 'react'

import Card from './components/basicos/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import Comparametro from './components/basicos/ComParametro'
import Aleatorio from'./components/basicos/Aleatorio'

function App(props){
    return(
        <div id="app">  
        <h1>Fundamentos React</h1>
        <Card titulo="Exemplo de card"></Card>


        <Aleatorio min={800} max={8000}/>
        <Primeiro/>
         <Comparametro
            titulo="Situação do aluno" 
            aluno="Lucas" 
            nota={9.6}/>
        </div>
    )
}


export default App