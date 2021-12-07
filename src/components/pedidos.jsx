import React,{useState,useEffect} from 'react'
import {apiProductoGetRest} from '../modelo/apiproducto'
const Pedidos = () => {

    const [data,setData]=useState([])
    
    const obtenerDatos=()=>{
        const resp=apiProductoGetRest()
        resp.then(dato=>{
            setData(dato.data)
                  
        })
    }   
    useEffect(obtenerDatos,[])
     return (
        <div>
            <h2>Lista de Producto</h2>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Producto</td>
                        <td>Precio</td>
                        <td>Categoria</td>
                        <td>Stock</td>
                        <td>Descripción</td>
                        
                    </tr>

                </thead>
                <tbody>
                    {
                        data.map(item=>
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.nomprod}</td>
                                    <td>{item.categoria}</td>
                                    <td>{item.stock}</td>
                                    <td>{item.descripcion}</td>
                                </tr>

                        )


                    }
                </tbody>


            </table>

            
        </div>
    )
}
export default Pedidos
