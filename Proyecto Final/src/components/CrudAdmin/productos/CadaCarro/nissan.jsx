import { useEffect, useState } from "react";
import getNissan from "../../../../services/Api copy";
import deleteNissan from  "../../../../services/Nissan"
import "./carros.css";
function NissanMostrar() {
  const [items, setCarros] = useState([]);
  useEffect(() => {
    datos();
  }, []);
  const datos = async () => {
    const datosNissan = await getNissan();
    setCarros(datosNissan);
  };

  const eliminarNissan = async (id)=>{
        deleteNissan(id)
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
              <h4 onClick={()=>eliminarNissan(item.id)}>Hola </h4>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NissanMostrar;
