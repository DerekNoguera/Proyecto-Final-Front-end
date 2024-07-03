import { useEffect, useState } from "react";
import getNissan from "../../../../services/Carros/Nissan/getNissan";
import putNissan from "../../../../services/Carros/Nissan/PutNissan";
import deleteNissan from "../../../../services/Carros/Nissan/DeleteNissan";
import "./carros.css";

function NissanMostrar() {
  const [items, setCarros] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [AbrirModal, setModalAbierto] = useState(false);
  const [Year, setYear] = useState("");
  const [Price, setPrice] = useState("");
  const [id, setID] = useState(null)

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  useEffect(() => {
    datos();
  }, []);

  const datos = async () => {
    const datosNissan = await getNissan();
    setCarros(datosNissan);
  };

  const eliminarNissan = async (id) => {
    await deleteNissan(id);
    datos();
  };
  const BotonEditar = (item) => {
    setID(item.id); 
    setImageUrl(item.Url);
    setYear(item.Year);
    setPrice(item.precio);
    setModalAbierto(true);
  };
  const enviarDatos = async () => {
    await putNissan( imageUrl, Year, Price, id);
    setModalAbierto(false);
    datos();
  };


  const closeModal = () => {
    setModalAbierto(false);
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
                <h6>{item.marca}</h6>
                <p className="precio">{"$" + item.precio}</p>
              </div>
              <div>
                <input className="Inpdelete" onClick={() => eliminarNissan(item.id)} type="button" value="Eliminar" />
                <input className="Editar" onClick={() => BotonEditar(item)} type="button" value="Editar" />
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

export default NissanMostrar;

