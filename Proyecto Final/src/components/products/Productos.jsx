import "./productos.css"

function Productos() {
  return (
    <div className="grid-container">

        <div className="container-productos">
          <h1></h1>
        </div>
        <div className="aside">

          <h3 className="txt-Categoria">Categorías</h3>
          <ul className="lista-Categoria">
            <li><h6 className="hover">Nissan</h6></li>
            <li><h6  className="hover" >Ferrari</h6></li>
            <li><h6  className="hover">Lamborghini</h6></li>
            <li><h6  className="hover">Chevrolet</h6></li>
            <li><h6  className="hover">Honda</h6></li>
            <li><h6  className="hover">Toyota</h6></li>
          </ul>

        </div>

    </div>
  )
}

export default Productos