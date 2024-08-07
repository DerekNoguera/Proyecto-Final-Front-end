// La explicacion de este componente es la misma que la de el componente 
//Toyota, el componente toyota esta en /componentes/CrudAdmin/CadaCarro/Toyotaa.jsx

import { useEffect, useState } from "react";
import getHonda from "../../../../services/Carros/Honda/getHonda";
import deleteHonda from '../../../../services/Carros/Honda/deleteHonda'
import putHonda from "../../../../services/Carros/Honda/putHonda";
import Swal from 'sweetalert2';
import "./carros.css";
function HondaMostrar() {
  const [items, setCarros] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [AbrirModal, setModalAbierto] = useState(false);
  const [Year, setYear] = useState("");
  const [Price, setPrice] = useState("");
  const [id, setID] = useState(null)
  const [Honda, setHonda] = useState('Honda')
  const [EditExitoso, setEditExitoso] = useState('')
  useEffect(() => {
    datos(EditExitoso,AbrirModal,items);
  }, []);
  const datos = async () => {
    const datosHonda = await getHonda();
    setCarros(datosHonda);
  };
  const eliminarHonda = async (id) => {
    // if (confirm("Estas seguro que deseas eliminar este producto??") == true) {
    //   deleteHonda(id)
    // } else {
    //   return false
    // }
    // datos();
    Swal.fire({
      title: "Estas seguro?",
      text: "Seguro que no quieres revertirlo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminarlo!"
    }).then(async (result) => {

      if (result.isConfirmed) {
        deleteHonda(id)
        Swal.fire({
          title: "Eliminado!",
          text: "El archivo fue eliminado!",
          icon: "success"
        });
        datos();
      } else {
        console.log("Cancelado");
      }
    });
  }
  const BotonEditar = (item) => {
    setID(item.id);
    setImageUrl(item.Url);
    setYear(item.año);
    setPrice(item.precio);
    setModalAbierto(true);
  };
  const enviarDatos = async () => {
    if (imageUrl.trim() === '' || Year.trim() === '' || Price.trim() === '') {
      setEditExitoso('No puedes dejar campos vacios')
    } else {
      await putHonda(imageUrl, Year, Price, Honda, id);
      setTimeout(() => {
        setModalAbierto(false);
      }, 1000);
      setTimeout(() => {
        setEditExitoso('')
      }, 1000);
      setEditExitoso('Edit Exitoso')
    }
    datos();
  };
  const closeModal = () => {
    setModalAbierto(false);
  };
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
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
                <h6 className="h6Txt">{item.marca}</h6>
                <p className="precio">{item.año}</p>
                <p className="precio2">{"$" + item.precio}</p>
              </div>
              <div>
                <div className="divInpCrud">
                  <input className="Inpdelete" onClick={() => eliminarHonda(item.id)} type="button" value="Eliminar" />
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
                    <h6 className="MsgAlerta">{EditExitoso}</h6>
                  </div>
                </div>
                <div className="mini2">
                  <input className="cerrarModal" onClick={closeModal} type="button" value="X" />
                  <div>
                    <option className='inpPost' value={Honda} onChange={(e) => setHonda(e.target.value)}>Honda</option>
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

export default HondaMostrar;
