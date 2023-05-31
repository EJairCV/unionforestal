import React, { useEffect, useState } from 'react'
import data from "./data.json"

function useMaderaList() {
    const [maderas, setMaderas] = useState()
    const [estado, setEstado] = useState(false)


    const getListaMadera=()=>{
        setEstado(false)
        setMaderas(data.lista)
        setEstado(true)
    }


    useEffect(() => {
      getListaMadera()
        
      
    }, [])
    
    
  return {
    maderas,
    estado

  }
}

export default useMaderaList