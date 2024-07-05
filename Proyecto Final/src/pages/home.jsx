import CarruselC from "../components/Carrusel/carruselC"
import NavbarFun from "../components/navBar/navBar"
import Productos from "../components/products/Productos"
import Footer from "../components/footer/footer"
// import PaginaAdmin from "../components/PaginaAdmin"
function Home() {
  return (
    <div className="divMayor" >
      <NavbarFun/>
     <CarruselC/>
     <Productos/>
     {/* <PaginaAdmin/> */}
     <Footer/>
    </div>
  )
}
export default Home
