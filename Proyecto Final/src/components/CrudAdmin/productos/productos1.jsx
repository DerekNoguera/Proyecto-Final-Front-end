import './productos.css'
import { useState } from 'react';
import postFerrari from "../../../services/Carros/Ferrari/postFerrari"
import postToyota from '../../../services/Carros/Toyota/PostToyota';
import postChevrolet from '../../../services/Carros/Chevrolet/postChevrolet'
import postLambo from '../../../services/Carros/Lambo/postLambo'
import postNissan from '../../../services/Carros/Nissan/PostNissan'
import postHonda from '../../../services/Carros/Honda/postHonda'
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
  const UrlRegla = /^(ftp|http|https):\/\/[^ "]+$/
  const [txtAlert, settxtAlert] = useState('')
  const [msgAlertError, setmsgAlertError] = useState('')
  const handleInputChange = (e) => {
    // la const URL va a ser igual a la URL que el Usuario ingreso en el input
    const URL  = e.target.value 

    if (UrlRegla.test(URL)) {
      // si UrlRegla se testea URL para ver si el valor de el input cumple con UrlRegla 
      setImageUrl(URL)
      //se setea URL a ImgURL
    }
  };

  const enviarDatos = async () => {
    if (imageUrl.trim() === "" || Price.trim() === "" || Year.trim() === "") {
      setmsgAlertError('No puedes dejar espacios en blanco')
      
      setTimeout(() => {
        setmsgAlertError('')
      }, 1000);

      return;
    } else {
      
      //Busca donde entrar de acuerdo a las OPtions, si selecciono la option de Nissan
      // si Marca es Iguala Nissan se le setea a Nissan los datos
      if (Marca == Nissan) {
        postNissan(imageUrl, Marca, Year, Price,)
        settxtAlert('Posteo exitoso')
        setmsgAlertError('')
        setMarca("")
        setYear("")
        setPrice("")
        setImageUrl("")
      } else if (Marca === Ferrari) {
        // si no a ferrari
        postFerrari(imageUrl, Marca, Year, Price,)
        settxtAlert('Posteo exitoso')
        setmsgAlertError('')
        setMarca("")
        setYear("")
        setPrice("")
        setImageUrl("")
      }
      else if (Marca === Lamborghini) {
        // si no a Lamborghini
        postLambo(imageUrl, Marca, Year, Price,)
        settxtAlert('Posteo exitoso')
        setmsgAlertError('')
        setMarca("")
        setYear("")
        setPrice("")
        setImageUrl("")
      }
      else if (Marca === Chevrolet) {
        //si no a Chevrolet
        postChevrolet(imageUrl, Marca, Year, Price,)
        settxtAlert('Posteo exitoso')
        setmsgAlertError('')
        setMarca("")
        setYear("")
        setPrice("")
        setImageUrl("")
      }
      else if (Marca === Honda) {
        // si no a Honda
        postHonda(imageUrl, Marca, Year, Price,)
        settxtAlert('Posteo exitoso')
        setmsgAlertError('')
        setMarca("")
        setYear("")
        setPrice("")
        setImageUrl("")
      }
      else if (Marca === Toyota) {
        postToyota(imageUrl, Marca, Year, Price,)
        //Postea los datos a la Marca
        settxtAlert('Posteo exitoso')
        setmsgAlertError('')
        setMarca("")
        setYear("")
        setPrice("")
        setImageUrl("")
      }
    }  
    setTimeout(() => {
      settxtAlert('')
      setmsgAlertError('')
    }, 1000);
  }
  const openModal = () => {
    //retorna un true al modal para que se abra
    setModalAbierto(true);
  };

  const closeModal = () => {
    // retorna un false al modal para que se cierre
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
                    <h6 className='MsgAlerta'>{txtAlert}</h6>
                    <h6 className='MsgAlertaerror'>{msgAlertError}</h6>
                  </div>
                </div>
                <div className='mini2'>
                  <input className="cerrarModal" onClick={closeModal} type="button" value="X" />
                  <div>
                    <input className='inpPost' type="text" placeholder='URL de la Imagen' value={imageUrl} onChange={handleInputChange} />
                    {/* un input en el cual oy a poner la URL de la imagen  */}
                    <select className='inpPost' placeholder='Marca' value={Marca} onChange={(e) => setMarca(e.target.value)} name="" id="">
                      {/* Crea un select Para elegir la Marca a la hora de Postearlo  */}
                      <option className='colorOptions' >Elige el carro</option>
                      <option className='colorOptions' value={Nissan} onChange={(e) => setNissan(e.target.value)}>Nissan</option>
                      <option className='colorOptions' value={Ferrari} onChange={(e) => setFerrari(e.target.value)}>Ferrari</option>
                      <option className='colorOptions' value={Lamborghini} onChange={(e) => setLamborghini(e.target.value)}>Lamborghini</option>
                      <option className='colorOptions' value={Chevrolet} onChange={(e) => setChevrolet(e.target.value)}>Chevrolet</option>
                      <option className='colorOptions' value={Honda} onChange={(e) => setHonda(e.target.value)}>Honda</option>
                      <option className='colorOptions' Value={Toyota} onChange={(e) => setToyota(e.target.value)}>Toyota</option>
                    </select>
                    {/* Cuando se seleccione la option entonces el INPUT va a valer la option  */}
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
