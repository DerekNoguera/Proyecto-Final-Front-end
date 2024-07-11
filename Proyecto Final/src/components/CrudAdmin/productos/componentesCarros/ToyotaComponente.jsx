import { useEffect, useState } from "react";
import getToyota from "../../../../services/Carros/Toyota/getToyota";
function ToyotaComponente() {
    const [items, setCarros] = useState([]);
    const [filteredItems, setFilterItems] = useState([]);
    const [yearFiltro, SetYear] = useState('');
    //se setean los datos de setYear a yearFiltro
    // const [PrecioFiltro, setPrice] = useState('');


    useEffect(() => {
        datos();
        AplicarFiltros();
    }, [filteredItems]) // el useEffect se ejecuta cada que hay un cambio en alguno de esos datos


    const datos = async () => {
        //se obtienen los dartos de el api
        const datosToyota = await getToyota();
        setCarros(datosToyota);
        // se setean los datos a items
        setFilterItems(datosToyota)
        // se setean todos los datos de la api a filteredItems para filtrarlos con .filter()
    };

    const AplicarFiltros = () =>{
        let filtrar = items;
        //se crea una variable que va a ser igual a items e items son todos los datos de el array
        if (yearFiltro) { // valida si yearFitro es verdadero, osea si tiene un dato en el input
          filtrar = filtrar.filter(item => item.año.toString().includes(yearFiltro));
          // filtra los datos que estan guardados en la variable filtrar,  agarra item.año lo convierte a String porque es un numero
          // el includes busca si el valor de yearFiltro existe en item.año
          //metemos yearFiltro dentro de includes() para saber donde vamos a buscar
        }
    
        // if (PrecioFiltro) {
        //   filtrar = filtrar.filter(item => item.precio <= parseFloat(PrecioFiltro) || item.precio == parseFloat(PrecioFiltro));
        // }
        setFilterItems(filtrar); 
        //se setan a setFilterItems los datos encontrados por filtrar
      };

    return (
        <>
         <div className="divFilter">
            {/* input para filtrar los carros por year  */}
          <input  type="text" className="filtro"  placeholder="Filtrar por año"  value={yearFiltro}  onChange={(e) => SetYear(e.target.value)}  />
            {/* se llama el onchange arriba para setear los datos ingresados a la constante  */}
         {/* <input  type="number" className="filtro"  placeholder="Precio máximo"  value={PrecioFiltro}  onChange={(e) => setPrice(e.target.value)}  /> */}
        </div>
        <div>
            <div className="divsCarros">
                {filteredItems.map((item) => (
                    <div className="divContenido" key={item.id}>
                        <div>
                            <img className="imgCarros" src={item.Url} alt="" />
                            {/* muestra la imagen  */}
                        </div>
                        <div className="divDescription">
                        <div className="div2Carros">
                            <h6 className="h6Mostrar">{item.marca}</h6>
                            <p className="pecioMostrar">{item.año}</p>
                            <p className="pecioMostrar2">{"$" + item.precio}</p>
                            {/* muestra marca, year y precio  */}
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </>
        
    );
}

export default ToyotaComponente;