import { useEffect, useState } from "react";
import   getFerrari  from "../../../../services/Carros/Ferrari/getFerrari";
import deleteFerrari from '../../../../services/Carros/Ferrari/deleteFerrari';
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
  const eliminarFerrari = async (id) => {
    deleteFerrari(id)
    setTimeout(() => {
      datos()
    }, 100)
  }

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
            <input className="Inpdelete" onClick={() => eliminarFerrari(item.id)} type="button" value="Eliminar" />
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
