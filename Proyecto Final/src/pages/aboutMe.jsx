import NavbarFun from "../components/navBar/navBar"
import AboutMeC from "../components/About/AboutMe"
import Footer from "../components/footer/footer"
function AboutMe() {
  //recibe los componentes, NAV, AboutMe y Footer
  return (
    <div className="aboutMe">
      <NavbarFun/>
      <AboutMeC/>
      <Footer/>
    </div>
  )
}

export default AboutMe
