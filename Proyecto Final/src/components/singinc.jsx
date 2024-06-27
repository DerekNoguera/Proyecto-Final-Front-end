import { useState } from "react";
import { loginUser, registerUser } from "../services/Api copy";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Singinc = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();// constante que me ayuda a navegar de paginas

  const perrito = async () => {
    const get = await loginUser();//obtiene los datos de el api

    if (user.trim() && email.trim() && password.trim()) {  // valida si los espacios estan vacios entonces tire la alerta de abajo
      const UsuarioExistente = get.some(e => user === e.user || email === e.email);
      //.some() busca si al menos 1 elemento de get existe
      //Si se encuentra un usario existente entonces se guarda en UsuarioExistente un true
      if (UsuarioExistente) {//si  UsuarioExistente entonces tira la alerta de abajo
        alert(`Usuario "${user}" o email "${email}" existentes`);
      } else {// si no dice que inicio exitoso
        alert("Registro exitoso, redirigiendo al login");
        registerUser(user, email, password);// pone en el api los datos
        setTimeout(() => {
          navigate("/");//lo envia a la pagina
        }, 2000);
      }
    } else {
      alert("No puedes dejar campos vacíos");
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
        <br /><br /><br />
        <input
          className="btnRegister"
          type="button"
          value="Register"
          onClick={perrito}
        />
        <br /><br />
        <button className="btnRegister">
          <Link className="btnRyL" to="/">
            Ir a iniciar sesión
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Singinc;