import "./aboutMe.css"
function AboutMeC() {

  // Paggina de Sobre Nosotros
  return (
    <div className="infoContainer">
      <div className="DivInf">
        <div className="divsInfoInternos">
          <h4 className="textoAboutUs">Sobre Nosotros</h4>
          <h6 className="txtSobreNosotros">
            <div className="divAbout">
              Somos una empresa dedicada a la venta de autos con más de 150 años de experiencia en el mercado. Fundada por 23dereek, nuestro compromiso siempre ha sido brindar a nuestros clientes la mejor calidad y servicio, asegurando que cada vehículo que ofrecemos cumpla con los más altos estándares de seguridad y eficiencia.
              Desde nuestros inicios, hemos evolucionado junto con la industria automotriz, adaptándonos a las nuevas tecnologías y tendencias para ofrecer siempre lo mejor. Nuestra trayectoria nos ha permitido construir una sólida reputación basada en la confianza y la satisfacción de nuestros clientes.
              En nuestra empresa, creemos que cada auto tiene una historia y cada cliente merece una experiencia única. Por eso, nos esforzamos día a día para ofrecer un servicio personalizado que se adapte a las necesidades y expectativas de cada persona que nos elige.
            </div>
          </h6>
        </div>
        <div >
          <img className="imgAboutUs" src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539089222862.jpg" alt="" />
        </div>
      </div>
      <div className="DivInf">
        <div><img className="imgAboutUs" src="https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/05/30/16539090067290.jpg" alt="" /></div>
        <div className="divsInfoInternos">
            <a href="http://instagram.com/23dereek"> <img className="imgs" src="../../../assets/instagram.png" alt="jaja" /></a>
            <a href="http://tiktok.com/23dereek" ><img className="imgs" src="../../../assets/tiktok1.png" alt="jaja" /></a>
            <a href="http://facebook.com"><img className="imgs" src="../../../assets/facebook.png" alt="jaja" /></a>
            <a href="http://Linkedin.com"><img className="imgs" src="../../../assets/linkedin.png" alt="jaja" /></a>
        </div>
      </div>
    </div>
  )
}

export default AboutMeC
