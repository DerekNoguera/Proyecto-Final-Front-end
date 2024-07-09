import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Singin from "../pages/singin";
import Home from "../pages/home";
import PaginaError from "../components/paginaError";
import PaginaPriv from "../components/paginaPriv";
import AboutMe from "../pages/aboutMe";
import Contactanos from "../pages/Contactanos";
import PaginaErrorUser from "../components/paginaErrorUser";
import PaginaAdmin from "../components/PaginaAdmin";
import MensajesAdmi from "../pages/MensajesAdmi";
// import Admin from "../pages/Admin";

const Rutas = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Singin />} />
          <Route path="/error" element={<PaginaError/>}/>
          <Route path="noAdmin" element={<PaginaErrorUser/>}/>
          <Route path="/*" element={<PaginaError/>}/>


          
          <Route path="/home" element={<PaginaPriv>
            <Home/>
          </PaginaPriv>}/>


            <Route path="/mensajes" element={<MensajesAdmi/>}/>
            <Route path="/Admin" element={<PaginaAdmin/>}/>
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/Contactanos" element={<Contactanos/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default Rutas;
