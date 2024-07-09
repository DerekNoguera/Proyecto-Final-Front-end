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
        postCorreos(nombre,apellido,email,mensaje)
        setNombre("")
        setApellido("")
        setEmail("")
        setMensaje("")
        settexto("Mensaje Enviado")
        setTimeout(() => {
            settexto("")
        }, 2000);
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
            </div>
            <div>
                <label htmlFor="">Apellido</label><br />
                <input value={apellido}  onChange={(e) => setApellido(e.target.value)} className="inpTxt1" type="text" name="Apellido" />
            </div>
        </div>
        <div className="grid2"><br/>
            <div>
                <label htmlFor="Email *">Email *</label> <br />
                <input value={email}  onChange={(e) => setEmail(e.target.value)} className="inpTxt2"  type="text" name="Email" />
            </div><br />
            <div>   
                <label htmlFor="">Escribe un mensaje</label><br /><br />
                <input value={mensaje}  onChange={(e) => setMensaje(e.target.value)} className="inpTxt2"  type="text" name="Mensaje" />
            </div>
            <h5 className="textoValidacion2">{texto}</h5>
        </div>
        <div className="grid3">
            <div>
                <input onClick={EnviarMensaje} type="submit" className="boton" value="Enviar" />
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
