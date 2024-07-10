import React, { useEffect, useState } from 'react'
import getCorreos from "../../services/Correos/getCorreos"
import deleteCorreo from "../../services/Correos/deleteCorreo"
import "./mensajes.css"
function Mensaje() {
    const [mensajes, setMensajes] = useState([])
    // el UseState es un array porque no va a tener un solo dato, va a obtener un array
    const [eliminado, setEliminado] = useState("")
    const getMensajes = async () =>{
        const datos = await getCorreos()
        // todos los datos obtenidos se setean en la constante "mensajes"
       setMensajes(datos)
    }
    useEffect(() => {
        getMensajes()
        setEliminado("")
    }, [eliminado])
    const elimiarMensaje = async(id)=>{
      // recibe el id de los elementos en especifico para que en el api se eliminen los ID´s 
      // de esos datos en especifico
        deleteCorreo(id)
        setEliminado("Hola")
    }
  return (
    <>
     <div className='mensajesDivs'>
      {mensajes.map((mensaje)=>(
        // mensajes.map funciona como iterador
        <div className='ContainerMensajes' key={mensaje.id}> 
        {/* la key es mensaje.id es para que al momento de que se ejecute una accion, sea para ese objeto con ese id  */}
        {/* en especifico  */}
        <div className='divMsg1'>
            <h4 className='mensaje1'>{mensaje.Mensaje}</h4> 
            {/* muestro mensaje.Mensaje  */}
        </div>
        <div className='divMsg2'>
            <div><h5 className='MSGTexto'>{'Nombre: ' + mensaje.Nombre}</h5></div>
            <div><h5 className='MSGTexto'>{ 'Apellido: ' + mensaje.Apellido}</h5></div>
            <div><h5 className='MSGTexto'>{ 'Email: ' + mensaje.Email}</h5></div>
            {/* muestro nombre, apellido e Email  */}
            <div><input onClick={()=> elimiarMensaje(mensaje.id)} className='botonEliminarComentario' type="button" value="Eliminar" /></div>
            {/* el onclick va a tener el ID de los datos en especifico  */}
        </div>
        </div>
        
      ))}
    </div>
    </>
   
  )
}

export default Mensaje
