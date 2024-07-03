import { useEffect, useState } from "react";
import getHonda from "../../../../services/Carros/Honda/getHonda";
import deleteHonda from '../../../../services/Carros/Honda/deleteHonda'
import "./carros.css";
function HondaMostrar() {
  const [items, setCarros] = useState([]);
  useEffect(() => {
    datos();
  }, []);
  const datos = async () => {
    const datosHonda = await getHonda();
    setCarros(datosHonda);
  };
  const eliminarHonda = async (id) => {
    deleteHonda(id)
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
             <input className="Inpdelete" onClick={() => eliminarHonda(item.id)} type="button" value="Eliminar" />
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default HondaMostrar;
