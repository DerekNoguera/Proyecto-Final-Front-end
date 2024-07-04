  import { useEffect, useState } from "react";
  import getNissan from "../../../../services/Carros/Nissan/getNissan";
  function NissanComponente() {
    const [items, setCarros] = useState([]);
    useEffect(() => {
      datos();
    }, []);
    const datos = async () => {
      const datosNissan = await getNissan();
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
                  <h6 className="h6Mostrar">{item.marca}</h6>
                  <p className="pecioMostrar">{item.año}</p>
                  <p className="pecioMostrar2">{"$" + item.precio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  export default NissanComponente;
