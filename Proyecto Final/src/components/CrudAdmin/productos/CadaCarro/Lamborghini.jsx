import { useEffect, useState } from "react";
import  getLambo  from "../../../../services/Carros/Lambo/getLambo";
import deleteLambo from '../../../../services/Carros/Lambo/deleteLambo'
import "./carros.css";
function LamborghiniMostrar() {
  const [items, setCarros] = useState([]);
  useEffect(() => {
    datos();
  }, []);
  const datos = async () => {
    const datosLambo = await getLambo();
    setCarros(datosLambo);
    console.log(datosLambo);
  };
  const eliminarLambo = async (id) => {
    deleteLambo(id)
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
            <input className="Inpdelete" onClick={() => eliminarLambo(item.id)} type="button" value="Eliminar" />
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default LamborghiniMostrar;