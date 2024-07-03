import { useEffect, useState } from "react";
import deleteChevrolet from '../../../../services/Carros/Chevrolet/deleteChevrolet';
import getChevrolet from "../../../../services/Carros/Chevrolet/getChevrolet";
import "./carros.css";
function ChevroletMostrar() {
  const [items, setCarros] = useState([]);
  useEffect(() => {
    datos();
  }, []);

  const eliminarChevrolet = async (id) => {
    deleteChevrolet(id)
    setTimeout(() => {
      datos()
    }, 100)
  }

  const datos = async () => {
    const datosChevrolet = await getChevrolet();
    console.log(datosChevrolet);
    setCarros(datosChevrolet);
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
                <input className="Inpdelete" onClick={() => eliminarChevrolet(item.id)} type="button" value="Eliminar" />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default ChevroletMostrar;