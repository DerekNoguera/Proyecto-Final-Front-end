import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/login";
import Singin from "../pages/singin";
import Home from "../pages/home";
import PaginaError from "../components/paginaError";
import PaginaPriv from "../components/paginaPriv";
import AboutMe from "../pages/aboutMe";
import Contactanos from "../pages/Contactanos";


// import { Auth0Provider } from '@auth0/auth0-react';
const Rutas = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Singin />} />
          <Route path="/error" element={<PaginaError/>}/>
          <Route path="/*" element={<PaginaError/>}/>
          <Route path="/home" element={<PaginaPriv>
            <Home/>
          </PaginaPriv>}/>
          <Route path="/aboutMe" element={<AboutMe/>}/>
          <Route path="/Contactanos" element={<Contactanos/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default Rutas;
