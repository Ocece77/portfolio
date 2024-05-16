import React from "react"
import { Container } from "react-bootstrap";
import qrcode from './qrcode.png';
import './contact.scss';



 const Contact = () =>{
return (
  <>
  <Container id='contact' fluid className="row bg-light">
      <Container fluid className="col-11 p-5">
        <hr className="mb-5" />
        <Container className="row">
        <h1 className="col-lg-6 col-md-6 col-sm-12 fs-1 fw-bolder text-center text-uppercase my-5 ">J'ai hâte de travailler avec vous pour accomplir vos objectifs !</h1>

          <Container className="col-12 col-lg-3 col-md-5  d-flex  justify-content-center align-items-center "  >
                <img src={qrcode} alt="qrcode linkedin"  className="col-lg-5 col-sm-3 col-md-5 img img-fluid"/>
  
           <ul style={{ listStyleType: 'none' }}>
              <li><a  className="fs-4  text-decoration-none text-dark" href="mailto:oceanekasindupro@gmail.com"  rel="noopener noreferrer">Mail</a></li>
              <li><a   className="fs-4  text-decoration-none text-dark" href="https://www.linkedin.com/in/oceanekasindu/"  rel="noopener noreferrer">Linkedin</a></li>
              <li><a   className="fs-4  text-decoration-none text-dark" href="https://github.com/Ocece77"  rel="noopener noreferrer">Github</a></li>
            </ul>
        

          </Container>
        </Container>
      </Container>
  </Container>
  </>
)
}

export default Contact