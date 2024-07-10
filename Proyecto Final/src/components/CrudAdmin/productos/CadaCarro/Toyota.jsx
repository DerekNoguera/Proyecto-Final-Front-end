// Para ahorrarme de escribir la misma documentacion en los otros 5 archivos porque realmente es el mismo procedimiento
// Y mismas funciones, solamente que las dividi por compoentes para no equivacarme

// Estos archivos que estan dentro de la carpeta llamada CadaCarro  son los de el CRUD / parte de el Admin
import { useEffect, useState } from "react";
import getToyota from "../../../../services/Carros/Toyota/getToyota";
import deleteToyota from "../../../../services/Carros/Toyota/deleteToyota";
import putToyota from "../../../../services/Carros/Toyota/putToyota";
import "./carros.css";
// todos los llamados de exportaciones 
function ToyotaMostrar() {
  const [items, setCarros] = useState([]);
  const [AbrirModal, setModalAbierto] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [Year, setYear] = useState("");
  const [Price, setPrice] = useState("");
  const [id, setID] = useState(null);
  const [Toyota, setToyota] = useState("Toyota");
  const [EditExitoso, setEditExitoso] = useState('')

  useEffect(() => {
    datos();
    // el useEffect me permite recargar la funcion de datos() cada que existe un cambio
  }, []);

  const datos = async () => {
    const datosNissan = await getToyota();
    // obtiene los datos de el APi  y los guarda en  la const datosNissan
    setCarros(datosNissan);
    // datosNissan se le van a setear a setCarros y setCarros es items, al momento de iterar con .Map tendre que usar Items
  };

  const eliminarToyota = async (id) => {// recibe el ID como parametro desde la funcion
    if (confirm("Estas seguro que deseas eliminar este producto??") == true) {// usa un confirm para saber si realmente el usuario
      // quiere eliminar el producto
      deleteToyota(id); // le envia a el ID de el vehiculo que desea eliminar por parametro a el Api para eliminarlo
    } else {
      return false
      // si no es posible eliminarlo entonces retorna un false
    }
    //cuando se toca el boton de eliminar vuelve a llamar a la funcion de datos para guardar los datos
    datos();
  };
  const BotonEditar = (item) => {
    // la funcion de el boton de item
    setID(item.id);
    setImageUrl(item.Url);
    setYear(item.año);
    setPrice(item.precio);
    // se setean los valores de item a las constantes con set
    // eso quiere decir que si Year es setYear y a setYear se le setea el item.año entonces
    // Year tiene el valor de años que tenia el objeto
    setModalAbierto(true);
    // setModalAbierto va a ser true para que se abra el Modal
  };


  const enviarDatos = async () => {
    // la funcion de enviar datos de actualizacion
    if (imageUrl.trim() === '' || Year.trim() === '' || Price.trim() === '') {
      // valida que no hayan espacios en blanco
      setEditExitoso('No puedes dejar campos vacios')
    // y al texto h6 de abajo se le va a setear un texto de alerta
    } else {
      // si lo anterior no se cumple entonces se ejecuta lo siguiente
      await putToyota(imageUrl, Year, Price, Toyota, id);
      // se hace put de los nuevos valores de los inputs
      setEditExitoso('Edit Exitoso');
      //al H6 se le setea un Edit Exitoso!
      setTimeout(() => {
        //despues de 1s setModalAbierto va a ser falso, esto es para que se cierre el modal
        setModalAbierto(false);
      }, 1000);
      setTimeout(() => {
        setEditExitoso('')
        //despues de 1 segundo el texto va a pasar a ser nada, literalmente va a estar en blanco
      }, 1000);
    }
    datos();
  };


  const closeModal = () => {
    setModalAbierto(false);
    // cuando toque el boton de X entonces setModalAbierto va a ser falso para que se cierre
  };
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
    // a setImageUrl se le va a setear la URL escrita en el input, ese onChange viene del modal de abajo
  };

  return (
    <div>
      <div className="divsCarros"> 
        {items.map((item) => (
          // itero items con map, porque items es el array que obtiene todos mis datos
          <div className="divContenido" key={item.id}>
            {/* la key va a ser item.id para que todo el contenedor pertenezca a ese id  */}
            <div>
              <img className="imgCarros" src={item.Url} alt="" />
            </div>
            <div className="divDescription">
              <div className="div2Carros">
                <h6 className="h6Txt">{item.marca}</h6>
                <p className="precio">{item.año}</p>
                <p className="precio2">{"$" + item.precio}</p>
              </div>
              <div className="divInpCrud">
                <input
                  className="Inpdelete"
                  onClick={() => eliminarToyota(item.id)}
                  // funcion de eliminar el auto de el API y le envia el ID de el auto en especifico
                  type="button"
                  value="Eliminar"
                />
                <input
                  className="Editar"
                  onClick={() => BotonEditar(item)}
                  // boton de editar y le envia la key
                  type="button"
                  value="Editar"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="App">
        {AbrirModal && (
          // AbrirModal es SetModalabierto y si es true entonces va a ejecutar toda esta maquetacion
          <div className="DivMayorModal">
            <div className="DivMenorModal">
              <div className="containerMini">
                <div className="mini1">
                  <div className="divImg">
                    {imageUrl && (
                      //imageUrl es setImageUrl el cual arriba le seteamos un valor a Img
                      // si ImageUrl tiene algo entonces se ejecuta una img y en src se pone la url que seria ImageUrl
                      <img className="imgPost" src={imageUrl} alt="Imagen" />
                    )}
                  </div>
                  <div>
                    <input
                      className="btnAgregar"
                      type="button"
                      value="Editar"
                      onClick={enviarDatos}
                      // boton para enviar los cambios
                    />
                     <h6 className="MsgAlerta">{EditExitoso}</h6>
                    {/* una etiqueta de texto para validar hay espacios en blanco o no  */}
                  </div>
                </div>
                <div className="mini2">
                  <input
                    className="cerrarModal"
                    onClick={closeModal}
                    type="button"
                    value="X"
                  />
                  {/* input con funcion de cerrar modal que esta mas arriba  */}
                  <div>
                    <option
                      className="inpPost"
                      value={Toyota}
                      onChange={(e) => setToyota(e.target.value)}
                    >
                      {/* esta option va a setear toyota para saber que marca de carro estamos editando  */}
                      Toyota
                    </option>
                    <input
                      className="inpPost"
                      type="text"
                      placeholder="URL de la Imagen"
                      value={imageUrl}
                      onChange={handleInputChange}
                      //un onChange para la img para que se guarde un valor en la Img y eso sera la URL
                    />
                    <input
                      className="inpPost"
                      type="text"
                      placeholder="Year"
                      value={Year}
                      onChange={(e) => setYear(e.target.value)}
                      // setea el nuevo año que pondre
                    />
                    <input
                      className="inpPost"
                      type="text"
                      placeholder="Precio en USD"
                      value={Price}
                      onChange={(e) => setPrice(e.target.value)}
                      // setea el nuevo precio que pondre
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

export default ToyotaMostrar;
