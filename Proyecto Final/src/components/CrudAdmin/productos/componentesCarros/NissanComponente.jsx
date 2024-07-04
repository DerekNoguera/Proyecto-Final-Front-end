  import { useEffect, useState } from "react";
  import getNissan from "../../../../services/Carros/Nissan/getNissan";
  function NissanComponente() {
    const [items, setCarros] = useState([]);
    const [filteredItems, setFilterItems] = useState([]);
    const [yearFiltro, SetYear] = useState('');
    const [PrecioFiltro, setPrice] = useState('');

    useEffect(() => {
      datos();
    }, []);

    useEffect(() => {
      AplicarFiltros();
    }, [items, yearFiltro, PrecioFiltro]);
  

    const datos = async () => {
      const datosNissan = await getNissan();
      setCarros(datosNissan);
      setFilterItems(datosNissan)
    };

    const AplicarFiltros = () =>{
      let filtrar = items;
      if (yearFiltro) {
        filtrar = filtrar.filter(item => item.año.toString().includes(yearFiltro));
      }
  
      if (PrecioFiltro) {
        filtrar = filtrar.filter(item => item.precio <= parseFloat(PrecioFiltro) || item.precio == parseFloat(PrecioFiltro));
      }
      setFilterItems(filtrar);
    };
    return (
      <>
       <div className="divFilter">
          <input  type="text" className="filtro"  placeholder="Filtrar por año"  value={yearFiltro}  onChange={(e) => SetYear(e.target.value)}  />
         <input  type="number" className="filtro"  placeholder="Precio máximo"  value={PrecioFiltro}  onChange={(e) => setPrice(e.target.value)}  />
        </div>
       <div>
        <div className="divsCarros">
          {filteredItems.map((item) => (
            <div className="divContenido" key={item.id}>
              <div>
                <img className="imgCarros" src={item.Url} alt="" />
              </div>
              <div className="divDescription">
              <div className="div2Carros">
                  <h6 className="h6Mostrar">{item.marca}</h6>
                  <p className="pecioMostrar">{item.año}</p>
                  <p className="pecioMostrar2">{"$" + item.precio}</p>
                  <img src="as" alt="Nofound" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </>
     
    );
  }

  export default NissanComponente;