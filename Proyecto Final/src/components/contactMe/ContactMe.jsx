import "./ContactMeC.css"
function ContactMe() {
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
                <input className="inpTxt1" type="text" />
            </div>
            <div>
                <label htmlFor="">Apellido</label><br />
                <input className="inpTxt1" type="text" />
            </div>
        </div>
        <div className="grid2"><br/>
            <div>
                <label htmlFor="Email *">Email *</label> <br />
                <input className="inpTxt2"  type="text" />
            </div><br />
            <div>   
                <label htmlFor="">Escribe un mensaje</label><br /><br />
                <input className="inpTxt2"  type="text" />
            </div>
        </div>
        <div className="grid3">
            <div>
                <input type="button" className="boton" value="Enviar" />
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
