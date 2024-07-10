import { useState } from "react"
import "./ContactMeC.css"
import postCorreos from "../../services/Correos/postCorreos"
function ContactMe() {
    const [nombre, setNombre] = useState("")//obtiene los datos
    const [apellido, setApellido] = useState("")
    const [email, setEmail] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [texto, settexto] = useState("")
    const EnviarMensaje = async () => {
        //envia los dtos y los postea
        if (nombre.trim() === "" || apellido.trim() === "" || email.trim() === "" || mensaje.trim() === "" ) {
            // .trim() para validar los espacios en blanco
            settexto("No puedes dejar espacios en blanco")//setea un texto diciendoque no puede dejar espacios en blanco
            setTimeout(() => {
                settexto("")
                // elimina el mensaje en 2 segundos
            }, 2000);
        }else{
            postCorreos(nombre,apellido,email,mensaje)
            //se postean los datos de las constantes al api, esas constantes son los inputs
            //abajo todas las constante se restablencen cuando los datos son enviados.
            setNombre("")
            setApellido("")
            setEmail("")
            setMensaje("")
            settexto("Mensaje Enviado")
            //Muestra un mensaje en pantalla que el Mensaje fue enviavo
            setTimeout(() => {
                settexto("")
                //despues de 2 segundos desaparece el texto
            }, 2000);
        }
        
    }
  return (
    <body className="body1">
        <div className="Container">
      <div className="ContainerContactme">
        <div className="containerMenor">
            <h3>Contactanos</h3>
        </div><br />
        <div className="grid1">
            <div>
                <label htmlFor="Nombre">Nombre</label><br />
                <input value={nombre}  onChange={(e) => setNombre(e.target.value)} className="inpTxt1" type="text" name="Nombre" />
                {/* setea a la constante nombre el valor de lo que se escribe en el input */}
            </div>
            <div>
                <label htmlFor="">Apellido</label><br />
                <input value={apellido}  onChange={(e) => setApellido(e.target.value)} className="inpTxt1" type="text" name="Apellido" />
                   {/* setea a la constante apellido el valor de lo que se escribe en el input */}
            </div>
        </div>
        <div className="grid2"><br/>
            <div>
                <label htmlFor="Email *">Email *</label> <br />
                <input value={email}  onChange={(e) => setEmail(e.target.value)} className="inpTxt2"  type="text" name="Email" />
                   {/* setea a la constante email el valor de lo que se escribe en el input */}
            </div><br />
            <div>   
                <label htmlFor="">Escribe un mensaje</label><br /><br />
                <input value={mensaje}  onChange={(e) => setMensaje(e.target.value)} className="inpTxt2"  type="text" name="Mensaje" />
                   {/* setea a la constante mensaje el valor de lo que se escribe en el input */}
            </div>
            <h5 className="textoValidacion2">{texto}</h5>
        </div>
        <div className="grid3">
            <div>
                <input onClick={EnviarMensaje} type="submit" className="boton" value="Enviar" />
                {/* funcion Onclick para enviar los datos a el api */}
            </div>
            <div>
                <h6 className="GraciasTxt">¡Gracias por su mensaje!</h6>
            </div>
        </div>
      </div>
    </div>
    </body>
    
  )
}

export default ContactMe
