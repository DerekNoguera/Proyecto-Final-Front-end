
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./navBar.css"
import { useNavigate } from 'react-router-dom';

function NavbarFun() {
  
  const navigate = useNavigate()
  const BorrarItem = ( ) =>{
      localStorage.removeItem("token")
      localStorage.removeItem("token2")
      
      setTimeout(() => {
        navigate("/")
      }, 1000);}  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand>Skyline Rover</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link><Link to={"/home"} className='linkStyle'>Home</Link> </Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <div className='div'>
               <Nav.Link><Link  to={"/Admin"} className='nameProfile'>Admin</Link> </Nav.Link>
            </div> */}
            {/* <Form.Control type="search" placeholder="Search"  className="me-2"  aria-label="Search"  />
            <Button >Search</Button> */}
             {/* <input type="button" className='bton' value="Cerrar Sesion"
              onClick={BorrarItem} variant="outline-success" /> */}
               <h6 className='CerrarSesion' onClick={BorrarItem}>Cerrar Sesion</h6>  
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFun;