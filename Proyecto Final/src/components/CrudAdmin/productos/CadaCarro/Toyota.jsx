import { useEffect, useState } from "react";
import getToyota from "../../../../services/Toyota";
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

export default ToyotaMostrar;
