import { useState } from "react";
import { loginUser, registerUser } from "../../services/Api copy";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./singinc.css"
const Singinc = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [txto, settxto] = useState("")
  const [txto2, settxto2] = useState("")
  const navigate = useNavigate();// constante que me ayuda a navegar de paginas

  // const setEmail = () =>{
  //   const URL  = e.target.value 

  //   if (UrlRegla.test(URL) || URL === "") {
  //     setEmail(URL)
  //   }
  // }
  const perrito = async () => {
    const get = await loginUser();//obtiene los datos de el api

    if (user.trim() && email.trim() && password.trim()) {  // valida si los espacios estan vacios entonces tire la alerta de abajo
      const UsuarioExistente = get.some(e => user === e.user || email === e.email);
      //.some() busca si al menos 1 elemento de get existe
      //Si se encuentra un usario existente entonces se guarda en UsuarioExistente un true
      if (UsuarioExistente) {//si  UsuarioExistente entonces tira la alerta de abajo
        settxto("User o Email existente")
      } else {// si no dice que inicio exitoso
        settxto2("Registro exitoso, redirigiendo al login")
        settxto("")
        registerUser(user, email, password);// pone en el api los datos
        setTimeout(() => {
          navigate("/");//lo envia a la pagina
        }, 2000);
      }
    } else {
     settxto("No puedes dejar campos vacios")
      //alerta
    }
  };

  return (
    <div className="containerRegister">
      <div>
        <h1 className="h1Txt">Regístrate Aquí</h1>
        <br />
      </div>
      <div>
        <label className="labelRegister">Escribe tu nombre de usuario</label><br />
        <br />
        <input
          className="inpTxt"
          type="text"
          placeholder="Ingrese Usuario"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br /><br /><br />
        <label className="labelRegister">Ingresa tu correo</label><br />
        <br />
        <input
          className="inpTxt"
          type="text"
          placeholder="Ingrese Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br /><br />
        <label className="labelRegister">Crea una contraseña</label><br />
        <br />
        <input
          className="inpTxt"
          type="password"
          placeholder="Registra contraseña"
          value={password}
          pattern="\\w{4,10}"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <h6 className="textoValidacion">{txto}</h6>
        {/* campos de texto que iran cambiando de acuerdo a el useState */}
        <h6 className="textoValidacion2">{txto2}</h6>
        <br /><br />
        <input
          className="btnRegister"
          type="button"
          value="Register"
          onClick={perrito}
          // funcion onclick para enviar los datos 
        />
        <br /><br />
        <button className="btnRegister">
          <Link className="btnRyL" to="/">
            Ir a iniciar sesión
            {/* link para ir a el login  */}
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Singinc;