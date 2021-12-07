import React from 'react'

const Saludo = (props) => {
    return (
        <div>
            <p>Nombre: {props.nombre}</p> 
            <p>Apellido:{props.apellido}</p>
            
        </div>
    )
}

export default Saludo
