
import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

import Primeiro from './components/basicos/Primeiro'
import Comparametro from './components/basicos/ComParametro'


const root = document.getElementById('root')

ReactDOM.render(
<div>
    <Primeiro/>
    <Comparametro
    titulo="Situação do Aluno" 
    aluno="Lucas" 
    nota={9.6}/>
</div>
, root )