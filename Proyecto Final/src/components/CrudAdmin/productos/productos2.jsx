import './productos.css';
import NissanMostrar from "../productos/CadaCarro/nissan";
import FerrariMostrar from "../productos/CadaCarro/ferrari";
import LamborghiniMostrar from "../productos/CadaCarro/Lamborghini"
import ChevroletMostrar from "../productos/CadaCarro/Chevrolet"
import HondaMostrar from '../productos/CadaCarro/Honda';
import ToyotaMostrar from '../productos/CadaCarro/Toyota';
import { useState } from 'react';
// llama a todos los componentes de los autos

function Productos2() {
  const [CambiarComponente, setCambiarComponente] = useState("nissan");
  //CambiarComponente es la const que va a cambiar los componentes, por defecto es nissan para que se muestre 
  // el componente de Nissan
  const CambiarNissan = () => {
    setCambiarComponente("nissan"); // si da click al onclick de Nissan entonces se setea Nissa a CambiarComponente
  }
  const CambiarFerrari = () => {
    setCambiarComponente("ferrari");// si da click al onclick de ferrari entonces se setea ferrari a CambiarComponente
  }
  const CambiarLambo = () => {
    setCambiarComponente("lambo"); // si da click al onclick de lambo entonces se setea lambo a CambiarComponente
  }
  const CambiarChevrolet = () => {
    setCambiarComponente("chevrolet"); // si da click al onclick de chevrolet entonces se setea chevrolet a CambiarComponente
  }
  const CambiarHonda = () => {
    setCambiarComponente("Honda");// si da click al onclick de Honda entonces se setea Honda a CambiarComponente
  }
  const CambiarToyota = () => {
    setCambiarComponente("Toyota");// si da click al onclick de Toyota entonces se setea Toyota a CambiarComponente
  }

  return (
    <div className='div2'>
      <nav className='marcas'>
        <h6 className='estilosNameMarcas' onClick={CambiarNissan}>Nissan</h6>
        <h6 className='estilosNameMarcas' onClick={CambiarFerrari}>Ferrari</h6>
        <h6 className='estilosNameMarcas' onClick={CambiarLambo}>Lamborghini</h6>
        <h6 className='estilosNameMarcas' onClick={CambiarChevrolet}>Chevrolet</h6>
        <h6 className='estilosNameMarcas' onClick={CambiarHonda}>Honda</h6>
        <h6 className='estilosNameMarcas' onClick={CambiarToyota}>Toyota</h6> 
      </nav>
      {/* botones con funciones onclick para que cuando se toque a setCambiarComponente se le setee otro valor
      setCambiarComponente es CambiarComponente */}
      {CambiarComponente === "nissan" && <NissanMostrar />}
      {CambiarComponente === "ferrari" && <FerrariMostrar />}
      {CambiarComponente === "lambo" && <LamborghiniMostrar />}
      {CambiarComponente === "chevrolet" && <ChevroletMostrar />}
      {CambiarComponente === "Honda" && <HondaMostrar />}
      {CambiarComponente === "Toyota" && <ToyotaMostrar />}
      {/* si CambiarComponente es nissan se muestra el compoente Nissan,  si CambiarComponente es ferrari se muestra el compoente ferrari
      y asi consecutivamente con los otros componentes  */}
    </div>
  );
}

export default Productos2;
