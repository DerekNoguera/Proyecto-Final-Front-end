import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./navBar.css"
import { useNavigate } from 'react-router-dom';

function NavbarFun() {
  
  const navigate = useNavigate()
  const BorrarItem = ( ) =>{
      localStorage.removeItem("token")
      
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
            <Nav.Link> <Link to={"/aboutMe"} className='linkStyle'>Sobre Nosotros</Link></Nav.Link>
            <Nav.Link> <Link to={"/Contactanos"} className='linkStyle'>Contactanos</Link></Nav.Link>
            <NavDropdown title="Redes Sociales" id="navbarScrollingDropdown">
              <NavDropdown.Item href="https://instagram.com/23dereek"> Instagram: 23dereek</NavDropdown.Item>
              <NavDropdown.Item href="https://tiktok.com/23dereek">Tiktok: 23dereek</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to={"../soporte"} className='linkStyle'>Soporte Aqui</Link></NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            {/* <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button >Search</Button> */}
             <input type="button" className='bton' value="Cerrar Sesion"
              onClick={BorrarItem} variant="outline-success" />
             
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarFun;