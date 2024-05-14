import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './navelement.scss';

const Navelement =() => {
  return (
<>
    <Navbar expand="lg" className="text-light p-3 ">
      <Container>

        <Navbar.Brand className='fs-4 fw-bolder text-light' href="#">Kasindu<span>.</span></Navbar.Brand>
       
         <Navbar.Toggle aria-controls="navbarCollapse" />
        <Navbar.Collapse className="justify-content-end" id="navbarCollapse">
        <Nav
            className="justify-content-end flex-grow-1 pe-3 me-auto" navbarCollapse
          >
        <Nav.Link className="text-light px-4" href="#apropos">A propos</Nav.Link>
        <Nav.Link className="text-light px-4" href="#projets">Projets</Nav.Link>
        <Nav.Link className="text-light px-4" href="#bts">Le BTS</Nav.Link>
        <Nav.Link className="text-light px-4" href="#contacts">Contacts</Nav.Link>
        </Nav>

        </Navbar.Collapse>
     
      </Container>
    </Navbar>
    </>
  );
}

export default Navelement;