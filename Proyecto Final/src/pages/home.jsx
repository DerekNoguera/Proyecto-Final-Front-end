import CarruselC from "../components/Carrusel/carruselC"
import NavbarFun from "../components/navBar/navBar"
import Productos from "../components/products/Productos"
function Home() {
  return (
    <div>
      <NavbarFun/>
     <CarruselC/>
     <Productos/>
    </div>
  )
}
export default Home
