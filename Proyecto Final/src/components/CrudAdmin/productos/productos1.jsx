import './productos.css'
import { useState } from 'react';
// import { Postcars, loginUser } from "../../../services/Api copy"

function Productos1() {

  const [Marca, setMarca] = useState('')
  const [Year, setYear] = useState('')
  const [Price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('');

  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
  };

  const enviarDatos = async () => {
    console.log(Marca, Year, Price);
  }

  const [AbrirModal, setModalAbierto] = useState(false);
  const openModal = () => {
    setModalAbierto(true);
  };

  const closeModal = () => {
    setModalAbierto(false);
  };




  // const PostDatosCars = async () => {
  //   const getApi = await loginUser();
  //   const UserPrincipalAdmin = getApi[0]
  //   const ObjPost = UserPrincipalAdmin.ObjCars
  //   console.log(getApi);
  //   let hola = "hola"
  //   Postcars(hola)

  // }

  return (
    <div className='div1'>
      <div>
        {/* <input onClick={PostDatosCars} className='agregarProducto' type="button" value="asas" /> */}
        <input onClick={openModal} className='agregarProducto' type="button" value="+" />
      </div>

      <div className="App">
        {AbrirModal && ( // si abrirModal es verdadadero entonces ejecuta lo siguiente
          <div className="DivMayorModal">
            <div className="DivMenorModal">


              <div className='containerMini'>
                <div className='mini1'>

                  <div className='divImg'>
                    {imageUrl && (
                      <img className='imgPost' src={imageUrl} alt="Imagen" />
                    )}
                  </div>
                  <div>
                    <input onClick={enviarDatos} className='btnAgregar' type="button" value="Agregar" />
                  </div>

                </div>
                <div className='mini2'>
                  <input className="cerrarModal" onClick={closeModal} type="button" value="X" />
                  <div>
                    <input className='inpPost' type="text" placeholder='URL de la Imagen' value={imageUrl} onChange={handleInputChange} />
                    <input className='inpPost' type="text" placeholder='Marca' value={Marca} onChange={(e) => setMarca(e.target.value)} />
                    <input className='inpPost' type="text" placeholder='Year' value={Year} onChange={(e) => setYear(e.target.value)} />
                    <input className='inpPost' type="text" placeholder='Precio en USD' value={Price} onChange={(e) => setPrice(e.target.value)} />
                  </div>


                </div>
              </div>


            </div>
          </div>
        )}
      </div>



    </div>
  )
}

export default Productos1