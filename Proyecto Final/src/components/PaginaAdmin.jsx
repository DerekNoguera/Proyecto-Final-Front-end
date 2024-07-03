import React, { useState } from "react";
import { loginUser } from "../services/Api copy";
import { Navigate } from "react-router-dom";
import NavbarFun from "../components/navBar/NavBarAdmin"
import CrudAdmin from "../components/CrudAdmin/CrudAdmin"

function PaginaAdmin() {
  const [EsAdmin, setIsAdmin] = useState(null); // valor iniciar como nuloo

    const AdminF = async () => {
      let Admin = await loginUser();
      // console.log(Admin);
      let id = localStorage.getItem("token2");
      let UserAdmin = Admin[0];
      let IdAdmin = UserAdmin.id; // IdAdmin es el Id de el primer usuario registrado y el primer usuario registrado y es el admin
      // console.log(IdAdmin);z
      if (id === IdAdmin) {
        setIsAdmin(true); // si es verdaddero entra aqui y EsAdmin ahora sera verdadero
      } else {
        setIsAdmin(false);
        //si no si, EsAdmin ahora sera falso
      }
    };
    AdminF();
  if (EsAdmin === false) {
    return <Navigate to={"/noAdmin"} />;
    // si es falso entonces dirigame a la pagina de noAdmin
  }
  // if (EsAdmin) {
  //   return  <Navigate to={"/Admin"} />;
  // }
  return (
    <div>
      <NavbarFun/>
      <CrudAdmin/>
    </div>
  );
}

export default PaginaAdmin;
