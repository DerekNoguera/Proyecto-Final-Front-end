import { useEffect, useState } from "react";
import getToyota from "../../../../services/Carros/Toyota/getToyota";
import deleteToyota from '../../../../services/Carros/Toyota/deleteToyota';
import "./carros.css";
function ToyotaMostrar() {
  const [items, setCarros] = useState([]);
  useEffect(() => {
    datos();
  }, []);
  const datos = async () => {
    const datosNissan = await getToyota();
    setCarros(datosNissan);
  };
  const eliminarToyota = async (id) => {
    deleteToyota(id)
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
            <input className="Inpdelete" onClick={() => eliminarToyota(item.id)} type="button" value="Eliminar" />
            </div>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToyotaMostrar;
