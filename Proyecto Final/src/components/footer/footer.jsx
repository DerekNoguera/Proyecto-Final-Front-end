import { Link } from 'react-router-dom';
import "./footer.css"
function Footer() {
  return (
    <>
     <div className="containerFooter">
        <div className="containerInterior">
            <div className="div1Mayor">
                <div className="div1"><h1>Skyline rover</h1> </div>
                <div className="divs">
                    <h5 className="h5Footer">Services</h5>
                    <h5 className="h5Footer">Theme Tweak</h5>
                </div>
                <div className="divs">
                    <h5 className="h5Footer">Showcase</h5>
                    <h5 className="h5Footer">Widgetkit</h5>
                    <h5 className="h5Footer">Support</h5>
                </div>
                <div className="divs">
                    <h5 className="h5Footer"><Link to={"/aboutMe"} className='h5Footer'>About Us</Link></h5>
                    <h5 className="h5Footer"><Link to={"/Contactanos"} className='h5Footer'>Contact Us</Link></h5>
                    <h5 className="h5Footer">Affiliates</h5>
                    <h5 className="h5Footer">Resources</h5>
                </div>    
            </div>
            <div className="div2Mayor">
                 <div className="divRedesFooter">
                    <div className="redesMenorDiv">

                        <a href="http://instagram.com/23dereek"> <img className="imgs" src="../../../assets/instagram.png" alt="jaja" /></a>
                        <a href="http://tiktok.com/23dereek" ><img className="imgs" src="../../../assets/tiktok1.png" alt="jaja" /></a>
                        <a href="http://facebook.com"><img className="imgs" src="../../../assets/facebook.png" alt="jaja" /></a>
                        <a href="http://Linkedin.com"><img className="imgs" src="../../../assets/linkedin.png" alt="jaja" /></a>
                    </div>
                 </div>
            </div>
            </div>         
    </div>
    </>
   
  )
}

export default Footer
