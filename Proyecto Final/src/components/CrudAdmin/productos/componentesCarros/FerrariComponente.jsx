 // Toda la documentacion de este archivo esta en el componente ToyotaComponente
 // Ubicacion: src/components/CrudAdmin/productos/componentesCarros/ToyotaComponente.jsx
 

import { useEffect, useState } from "react";
import getFerrari from "../../../../services/Carros/Ferrari/getFerrari";
function FerrariComponente() {
    const [items, setCarros] = useState([]);
    const [filteredItems, setFilterItems] = useState([]);
    const [yearFiltro, SetYear] = useState('');
    // const [PrecioFiltro, setPrice] = useState('');
    useEffect(() => {
        datos();
    }, []);
    const datos = async () => {
        const datosFerrari = await getFerrari();
        setCarros(datosFerrari);
        setFilterItems(datosFerrari)
    };
    useEffect(() => {
        AplicarFiltros();
      }, [filteredItems,items,yearFiltro]);
    

    const AplicarFiltros = () =>{
        let filtrar = items;
        if (yearFiltro) {
          filtrar = filtrar.filter(item => item.año.toString().includes(yearFiltro));
        }
    
        // if (PrecioFiltro) {
        //   filtrar = filtrar.filter(item => item.precio <= parseFloat(PrecioFiltro) || item.precio == parseFloat(PrecioFiltro));
        // }
        setFilterItems(filtrar);
    }
    return (
        <>
        <div className="divFilter">
          <input  type="text" className="filtro"  placeholder="Filtrar por año"  value={yearFiltro}  onChange={(e) => SetYear(e.target.value)}  />
         {/* <input  type="number" className="filtro"  placeholder="Precio máximo"  value={PrecioFiltro}  onChange={(e) => setPrice(e.target.value)}  /> */}
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
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
        
    );
}

export default FerrariComponente;