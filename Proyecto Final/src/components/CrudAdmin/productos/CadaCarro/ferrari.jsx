import { useEffect, useState } from "react";
import getFerrari from "../../../../services/Carros/Ferrari/getFerrari";
import deleteFerrari from '../../../../services/Carros/Ferrari/deleteFerrari';
import putFerrari from "../../../../services/Carros/Ferrari/putFerrari"
import "./carros.css";
function FerrariMostrar() {
  const [items, setCarros] = useState([]);
  const [AbrirModal, setModalAbierto] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [Year, setYear] = useState("");
  const [Price, setPrice] = useState("");
  const [id, setID] = useState(null)
  const [Ferrari, setFerrari] = useState('Ferrari')
  useEffect(() => {
    datos();
  }, []);
  const datos = async () => {
    const datosFerrari = await getFerrari();
    setCarros(datosFerrari);
  };
  const eliminarFerrari = async (id) => {
    if (confirm("Estas seguro que deseas eliminar este producto??") == true) {
      deleteFerrari(id)
    } else {
      return false
    }
    datos();
  }
  const enviarDatos = async () => {
    if (imageUrl.trim() === '' || Year.trim() === '' || Price.trim() === '') {
      alert("No puede dejar campos vacios!")
    } else {
      await putFerrari(imageUrl, Year, Price, Ferrari, id);
      setModalAbierto(false);
    }

    datos();
  };
  const BotonEditar = (item) => {
    setID(item.id);
    setImageUrl(item.Url);
    setYear(item.año);
    setPrice(item.precio);
    setModalAbierto(true);
  };
  const closeModal = () => {
    setModalAbierto(false);
  };
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
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
                <h6 className="h6Txt">{item.marca}</h6>
                <p className="precio">{item.año}</p>
                <p className="precio2">{"$" + item.precio}</p>
              </div>
              <div>
                <div className="divInpCrud">
                  <input className="Inpdelete" onClick={() => eliminarFerrari(item.id)} type="button" value="Eliminar" />
                  <input className="Editar" onClick={() => BotonEditar(item)} type="button" value="Editar" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="App">
        {AbrirModal && (
          <div className="DivMayorModal">
            <div className="DivMenorModal">
              <div className="containerMini">
                <div className="mini1">
                  <div className="divImg">
                    {imageUrl && (
                      <img className="imgPost" src={imageUrl} alt="Imagen" />
                    )}
                  </div>
                  <div>
                    <input className="btnAgregar" type="button" value="Editar" onClick={enviarDatos} />
                  </div>
                </div>
                <div className="mini2">
                  <input className="cerrarModal" onClick={closeModal} type="button" value="X" />
                  <div>
                    <option className='inpPost' value={Ferrari} onChange={(e) => setFerrari(e.target.value)}>Ferrari</option>
                    <input className="inpPost" type="text" placeholder="URL de la Imagen" value={imageUrl} onChange={handleInputChange} />
                    <input className="inpPost" type="text" placeholder="Year" value={Year} onChange={(e) => setYear(e.target.value)} />
                    <input className="inpPost" type="text" placeholder="Precio en USD" value={Price} onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>

  );
}

export default FerrariMostrar;
// import React from 'react'
// import getFerrari from "../../../../services/Api copy"
// function FerrariMostrar() {
//     const Datos = async ()=>{
//         console.log(await getFerrari());
//     }
//     Datos
//   return (
//     <div>
//       hola
//     </div>
//   )
// }

// export default FerrariMostrar
