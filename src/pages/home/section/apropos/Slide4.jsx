import React ,{ useState, useEffect, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import './apropos.scss';
import Pdf from './cv.pdf';



const Slide4 =()=>{


  return(
    <>
     
 {/*Page 3*/}
 <Container id="cv"fluid className="col-12 horizontal-section h-100 d-flex justify-content-center align-items-center">

      <Container fluid className="col-12 row  w-100">

            {/*Mon CV */}
            <Draggable>
              <Container  className= "profil-container col-md-5 p-4 col-sm-12 ">
                <Container  className= "row col-md-12 bg-dark text-light mb-5 p-4 shadow-lg h-100">
                        <Container className="col-12 d-flex justify-content-around align-items-center">
                        <p className="text-light d-flex align-items-end h-100 ">Mon Cv en PDF</p>
                         <button className="btn btn-default bg-primary text-light "> <a className="text-light text-decoration-none" target="_blank" href={Pdf} rel='noopener noreferrer'>Voir mon cv.</a></button>
                          </Container>

                        </Container>

                  </Container>
            </Draggable>


      </Container>
</Container>

  
    </>
  )
}

export default Slide4;