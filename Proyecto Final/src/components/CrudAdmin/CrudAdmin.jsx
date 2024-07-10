import React, { useState } from 'react';
import './crudAdmin.css';
import Productos1 from "../CrudAdmin/productos/productos1";
import Productos2 from "../CrudAdmin/productos/productos2";
import Mensaje from "../mensajes/mensajes"

function CrudAdmin() {
  const [mostrarComponente, setMostrarComponente] = useState('componente1');

  const mostrarProductos1 = () => {
    setMostrarComponente('componente1');
    //cuando toca el boton se toque entonces a mostrar componente se le va a setear "componente1"
  };

  const mostrarProductos2 = () => {
    setMostrarComponente('componente2');
      //cuando toca el boton se toque entonces a mostrar componente se le va a setear "componente2"
  };
  const mostrarProductos3 = () => {
    setMostrarComponente('componente3');
  }

  return (
    <div className='Container1'>
      <div className='container2'>
        <div className='grid'>
          <div className='articles'>
            {/* si mostrarComponente es igual a "componente1" se muestra un componente y al contrario */}
            {mostrarComponente === 'componente1' && <Productos1 />}
            {mostrarComponente === 'componente2' && <Productos2 />}
            {mostrarComponente === 'componente3' && <Mensaje />}
          </div>
          <div className='asides'>
            {/* funciones onclick para cada boton para que muestre el componente correspondienet  */}
            <div className='divsAside1'>
              <input type="button" onClick={mostrarProductos1} className="inp1" value="Herramientas Admin" />
            </div>
            <div className='divsAside2'>
              <input type="button" onClick={mostrarProductos2} className="inp1" value="Visualizar Marcas" />
            </div>
            <div className="divsAside3">
            <input type="button" onClick={mostrarProductos3} className="inp1" value="Mensajes / Correos" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CrudAdmin;






{/* <div className='crud'>
          <button>Create</button>
          <button>Read</button>
          <button>Update</button>
          <button>Delete</button>
        </div>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>johndoe@example.com</td>
                <td>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
      </div> */}