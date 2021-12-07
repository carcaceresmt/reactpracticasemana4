import axios from "axios"

export const apiProductoGetRest=async()=>{

    const endpoint="http://localhost:8080/api/Producto/all"
    try{        
        const resp=await axios.get(endpoint)
        return resp
    }
    catch(e){
        alert(e)
    }

}

