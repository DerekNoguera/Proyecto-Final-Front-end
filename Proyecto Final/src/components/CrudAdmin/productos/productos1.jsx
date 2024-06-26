import './productos.css'
import { useState } from 'react';
import {postNissan,postFerrari,postLambo,postChevrolet,postHonda,postToyota} from "../../../services/Api copy"
function Productos1() {

  const [AbrirModal, setModalAbierto] = useState(false);
  const [Marca, setMarca] = useState('')
  const [Year, setYear] = useState('')
  const [Price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('');
  const [Nissan, setNissan] = useState('Nissan')
  const [Ferrari, setFerrari] = useState("Ferrari")
  const [Lamborghini, setLamborghini] = useState('Lamborghini')
  const [Chevrolet, setChevrolet] = useState('Chevrolet')
  const [Honda, setHonda] = useState('Honda')
  const [Toyota, setToyota] = useState('Toyota')
  const handleInputChange = (event) => {
    setImageUrl(event.target.value);
   
  };
  
  const enviarDatos = async () => {
   
    if (Marca == Nissan) {
      console.log("Posteo de Nissan exitoso!!");
      postNissan(imageUrl, Marca, Year, Price,)
    }else if (Marca === Ferrari) {
      postFerrari(imageUrl, Marca, Year, Price,)
      console.log("Posteo de Ferrari exitoso!!");
    }
    else if (Marca === Lamborghini) {
      postLambo(imageUrl, Marca, Year, Price,)
      console.log("Posteo de Lamborghini exitoso!!");
    }
    else if (Marca === Chevrolet) {
      postChevrolet(imageUrl, Marca, Year, Price,)
      console.log("Posteo de Chevrolet exitoso!!");
    }
    else if (Marca === Honda) {
      postHonda(imageUrl, Marca, Year, Price,)
      console.log("Posteo de Honda exitoso!!");
    }
    else if (Marca === Toyota) {
      postToyota(imageUrl, Marca, Year, Price,)
      console.log("Posteo de Toyota exitoso!!");
    }
    
  }
  const openModal = () => {
    setModalAbierto(true);
  };

  const closeModal = () => {
    setModalAbierto(false);
  };

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
                    <select  className='inpPost' placeholder='Marca' value={Marca} onChange={(e) => setMarca(e.target.value)} name="" id="">
                    <option  className='colorOptions' >Elige el carro</option>
                    <option  className='colorOptions' value={Nissan} onChange={(e) => setNissan(e.target.value)}>Nissan</option>
                    <option  className='colorOptions' value={Ferrari} onChange={(e) => setFerrari(e.target.value)}>Ferrari</option>
                    <option  className='colorOptions' value={Lamborghini} onChange={(e) => setLamborghini(e.target.value)}>Lamborghini</option>
                    <option  className='colorOptions' value={Chevrolet} onChange={(e) => setChevrolet(e.target.value)}>Chevrolet</option>
                    <option  className='colorOptions' value={Honda} onChange={(e) => setHonda(e.target.value)}>Honda</option>
                    <option  className='colorOptions' Value={Toyota} onChange={(e) => setToyota(e.target.value)}>Toyota</option>
                    </select>
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
