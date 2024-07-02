import { useEffect, useState } from "react";
import  { getFerrari } from "../../../../services/Api copy";
import "./carros.css";
function FerrariMostrar() {
  const [items, setCarros] = useState([]);
  useEffect(() => {
    datos();
  }, []);
  const datos = async () => {
    const datosFerrari = await getFerrari();
    
    setCarros(datosFerrari);
  };


  return (
    <div>
      <div className="divsCarros">
        {items.map((item) => (
          <div className="divContenido" key={item.id}>
            <div>
              <img className="imgCarros" src={item.Url} alt="" />
            </div>
            <div className="divDescription">
              <div className="div2Carros">
              <h6 >{item.marca}</h6>
              <p className="precio"> {"$" + item.precio}</p>
            </div>
            <div>
            <h6>delete</h6>
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default FerrariMostrar;
// import React from 'react'
// import getFerrari from "../../../../services/Api copy"
// function FerrariMostrar() {
//     const Datos = async ()=>{
//         console.log(await getFerrari());
//     }
//     Datos
//   return (
//     <div>
//       hola
//     </div>
//   )
// }

// export default FerrariMostrar
