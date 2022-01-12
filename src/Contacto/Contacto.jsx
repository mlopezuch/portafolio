import React from 'react'
import './Contacto.css'
import Formulario from './Formulario'

function Contacto() {
    return (
        <div className='Contacto'>
            <h1>Contacto</h1>
            <p>Si te interesa hablar sobre un proyecto, por favor rellena el formulario abajo y te responderé a la brevedad ;)</p>
            <Formulario/>
        </div>
    )
}

export default Contacto
