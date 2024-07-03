import "./productos.css"
import NissanComponente from '../../components/CrudAdmin/productos/componentesCarros/NissanComponente'
import FerrariComponente from '../../components/CrudAdmin/productos/componentesCarros/FerrariComponente'
import LamboComponente from '../../components/CrudAdmin/productos/componentesCarros/LamboComponente'
import ChevroletComponent from '../../components/CrudAdmin/productos/componentesCarros/ChevroletComponente'
import HondaComponente from '../../components/CrudAdmin/productos/componentesCarros/HondaComponente'
import ToyotaComponente from '../../components/CrudAdmin/productos/componentesCarros/ToyotaComponente'
import { useEffect, useState } from "react"
function Productos() {
  const [CambiarComponente, setCambiarComponente] = useState("nissan");
    useEffect(() => {
    console.log("hola");
      },[])



   

  return (
    <div className="grid-container">
      <div className="container-productos">
        <nav className='marcas'>
          <div onClick={() => setCambiarComponente("nissan")}><h6 className='estilosNameMarcas2' >Nissan</h6></div>
          <div onClick={() => setCambiarComponente("ferrari")}><h6 className='estilosNameMarcas2'>Ferrari</h6></div>
          <div onClick={() => setCambiarComponente("lambo")}><h6 className='estilosNameMarcas2' >Lamborghini</h6></div>
          <div onClick={() => setCambiarComponente("chevrolet")}><h6 className='estilosNameMarcas2' >Chevrolet</h6></div>
          <div onClick={() =>  setCambiarComponente("Honda")}><h6 className='estilosNameMarcas2' >Honda</h6></div>
          <div onClick={() => setCambiarComponente("Toyota")}><h6 className='estilosNameMarcas2' >Toyota</h6></div>
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