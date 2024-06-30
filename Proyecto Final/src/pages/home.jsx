import CarruselC from "../components/Carrusel/carruselC"
import NavbarFun from "../components/navBar/navBar"
import Productos from "../components/products/Productos"
// import PaginaAdmin from "../components/PaginaAdmin"
function Home() {
  return (
    <div className="divMayor" >
      <NavbarFun/>
     <CarruselC/>
     <Productos/>
     {/* <PaginaAdmin/> */}
    </div>
  )
}
export default Home
