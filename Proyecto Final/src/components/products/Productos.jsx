import "./productos.css"
import NissanComponente from '../../components/CrudAdmin/productos/componentesCarros/NissanComponente'
import FerrariComponente from '../../components/CrudAdmin/productos/componentesCarros/FerrariComponente'
import LamboComponente from '../../components/CrudAdmin/productos/componentesCarros/LamboComponente'
import ChevroletComponent from '../../components/CrudAdmin/productos/componentesCarros/ChevroletComponente'
import HondaComponente from '../../components/CrudAdmin/productos/componentesCarros/HondaComponente'
import ToyotaComponente from '../../components/CrudAdmin/productos/componentesCarros/ToyotaComponente'
import { useState } from "react"
function Productos() {
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
    <div className="grid-container">
      <div className="container-productos">
        <nav className='marcas'>
          <h6 className='estilosNameMarcas2' onClick={CambiarNissan}>Nissan</h6>
          <h6 className='estilosNameMarcas2' onClick={CambiarFerrari}>Ferrari</h6>
          <h6 className='estilosNameMarcas2' onClick={CambiarLambo}>Lamborghini</h6>
          <h6 className='estilosNameMarcas2' onClick={CambiarChevrolet}>Chevrolet</h6>
          <h6 className='estilosNameMarcas2' onClick={CambiarHonda}>Honda</h6>
          <h6 className='estilosNameMarcas2' onClick={CambiarToyota}>Toyota</h6>
        </nav>
        <div className="componentesDivMayor"> <br /><br />
          <div className="ComponentesAutos">
            <div>
              {CambiarComponente === "nissan" && <NissanComponente />}
              {CambiarComponente === "ferrari" && <FerrariComponente />}
              {CambiarComponente === "lambo" && <LamboComponente />}
              {CambiarComponente === "chevrolet" && <ChevroletComponent />}
              {CambiarComponente === "Honda" && <HondaComponente />}
              {CambiarComponente === "Toyota" && <ToyotaComponente />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Productos