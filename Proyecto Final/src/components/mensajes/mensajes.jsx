import React, { useEffect, useState } from 'react'
import getCorreos from "../../services/Correos/getCorreos"
import deleteCorreo from "../../services/Correos/deleteCorreo"
import "./mensajes.css"
function Mensaje() {
    const [mensajes, setMensajes] = useState([])
    const [eliminado, setEliminado] = useState("")
    const getMensajes = async () =>{
        const datos = await getCorreos()
       setMensajes(datos)
    }
    useEffect(() => {
        getMensajes()
        setEliminado("")
    }, [eliminado])
    const elimiarMensaje = async(id)=>{
        deleteCorreo(id)
        setEliminado("Hola")
    }
  return (
    <>
     <div className='mensajesDivs'>
      {mensajes.map((mensaje)=>(
        <div className='ContainerMensajes' key={mensaje.id}> 
        <div className='divMsg1'>
            <h4 className='mensaje1'>{mensaje.Mensaje}</h4>
        </div>
        <div className='divMsg2'>
            <div><h5 className='MSGTexto'>{'Nombre: ' + mensaje.Nombre}</h5></div>
            <div><h5 className='MSGTexto'>{ 'Apellido: ' + mensaje.Apellido}</h5></div>
            <div><h5 className='MSGTexto'>{ 'Email: ' + mensaje.Email}</h5></div>
            <div><input onClick={()=> elimiarMensaje(mensaje.id)} className='botonEliminarComentario' type="button" value="Eliminar" /></div>
        </div>
        </div>
        
      ))}
    </div>
    </>
   
  )
}

export default Mensaje
