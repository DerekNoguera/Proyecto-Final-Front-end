
import './productos.css';
import NissanMostrar from "../productos/CadaCarro/nissan";
import FerrariMostrar from "../productos/CadaCarro/ferrari";
import LamborghiniMostrar from "../productos/CadaCarro/Lamborghini"
import ChevroletMostrar from "../productos/CadaCarro/Chevrolet"
import HondaMostrar from '../productos/CadaCarro/Honda';
import ToyotaMostrar from '../productos/CadaCarro/Toyota';

import { useState } from 'react';


function Productos2() {
  const [CambiarComponente, setCambiarComponente] = useState("nissan");

  const CambiarNissan = () => {
    setCambiarComponente("nissan");
  }
  const CambiarFerrari = () => {
    setCambiarComponente("ferrari");
  }
  const CambiarLambo = () => {
    setCambiarComponente("lambo");
  }
  const CambiarChevrolet = () => {
    setCambiarComponente("chevrolet");
  }
  const CambiarHonda = () => {
    setCambiarComponente("Honda");
  }
  const CambiarToyota = () => {
    setCambiarComponente("Toyota");
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
      {CambiarComponente === "nissan" && <NissanMostrar />}
      {CambiarComponente === "ferrari" && <FerrariMostrar />}
      {CambiarComponente === "lambo" && <LamborghiniMostrar />}
      {CambiarComponente === "chevrolet" && <ChevroletMostrar />}
      {CambiarComponente === "Honda" && <HondaMostrar />}
      {CambiarComponente === "Toyota" && <ToyotaMostrar />}
    </div>
  );
}

export default Productos2;
