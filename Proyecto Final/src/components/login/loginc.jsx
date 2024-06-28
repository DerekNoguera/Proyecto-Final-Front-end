import { useState } from "react";
import { loginUser } from "../../services/Api copy";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../register/singinc.css"
const Loginc = () => {
  const [user, Cambiar1] = useState(); //se definen los valores de cambiar1 y cambiar2 como onChanmge
  const [password, Cambiar2] = useState(); //en una constante se pone el value de el input y el setvalue es para que lo setee

  const Navegar = useNavigate();
  const perrito = async () => {
    //ejecuta la funcion perrito de el boton'
    let inicioExitoso = await loginUser(); // obtiene los datos de el api
    let validarInicio = false
    inicioExitoso.forEach((e) => {// for de el api para buscar los usuarios existentes
      if (user === e.user && password === e.password) {// si el usuario y contraseña es correcto
        //crea un token el local y me dirige a la pagina
        localStorage.setItem("token", true);
        validarInicio = true
        setTimeout(() => {
          Navegar("/home");
        }, 2000);
        //me retorna un true a validarInicio para que tire la alerta
      } 
    });
    if (validarInicio) {
      alert("Inicio Exitoso! Por favor espere.")
      
    }
    
  };
  return (
    <>

    <div className="containerLogin">
      <div>
        <h3>Iniciar Sesion</h3>
      </div>
      <div>
        <label className="labelLogin" htmlFor="">User name</label><br /><br />
        <input className="inpTxt" type="text" placeholder="User" value={user} onChange={(e) => Cambiar1(e.target.value)} /><br /><br /><br />
        {/* // en el onChnage cambiar1 se llama y se ejecuta que a setValue, que setvalue es lo que se va a setear del input // setValue(e.target.value); */}
        <label className="labelLogin" htmlFor="">Password</label><br /><br />
        <input className="inpTxt" type="text"  name="name" placeholder="password"  value={password}  onChange={(e) => Cambiar2(e.target.value)} /> <br /><br /><br />
        <input className="btnLogin" type="button" value="Iniciar Sesion" onClick={perrito}  /><br /><br />
        {/* // funcion para el boton */}
        <button className="btnLogin"><Link className="btnRyL" to="/register"> Ir a registrarse</Link></button>
      </div>
    </div>

    </>
  );
};
export default Loginc;
