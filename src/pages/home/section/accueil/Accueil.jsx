import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { Container } from "react-bootstrap";
import pic1 from './pictures/pic1.jpg';
import pic2 from './pictures/pic2.jpg';
import pic3 from './pictures/pic3.jpg';
import pic4 from './pictures/pic4.jpg';
import pic6 from './pictures/pic6.jpg';
import pxArt1 from './pixelpic/pxArt1.png';
import pxArt2 from './pixelpic/pxArt2.png';
import pxArt3 from './pixelpic/pxArt3.png';
import pxArt4 from './pixelpic/pxArt4.png';
import pxArt6 from './pixelpic/pxArt6.png';

import './accueil.scss';

const Accueil = () => {

  
  return (
    <Container  id="accueil" >
      <Container className=" mt-5 row w-100 p-2 align-item-center justify-content-start">
        <Container className="row col col-md-10">
          {/* Column 1 */}
          <Container className="col-3">


            <Container className="image mb-4" >
              <img src={pic1} alt={pic1} id="pic1" className="img img-fluid" />
              <img src={pxArt1} alt={pxArt1} className="img img-fluid" />
            </Container>


    
           <Container className="image mb-4">
              <img src={pic2} alt={pic2} id="pic2" className="img img-fluid invisible" />
              
            </Container>
  
          

        
          <Container className="image">
              <img src={pic3} alt={pic3} id="pic3" className="img img-fluid" />
              <img src={pxArt3} alt={pxArt3} className="img img-fluid" />
            </Container>

            
</Container>
          {/* Column 2 */}
          <Container className="col-3">
            <Container className="image mb-4">
              <img src={pic4} alt={pic4} className="img img-fluid" />
              <img src={pxArt4} alt={pxArt4} className="img img-fluid" />
            </Container>
            <Container className="image mb-4">
              <img src={pic6} alt={pic6} className="img img-fluid" />
              <img src={pxArt6} alt={pxArt6} className="img img-fluid" />
            </Container>
            <Container className="image mb-4">
              <img src={pic2} alt={pic2} className="img img-fluid" />
              <img src={pxArt2} alt={pxArt2} className="img img-fluid" />
            </Container>
          </Container>

          {/* Column 3 */}
          <Container className="col-5 ms-3 text-light row d-flex align-items-center">
            <Container>
              <h1 className="fw-bold">OCEANE KASINDU</h1>
              <p >Etudiante en BTS SIO</p>
              <p>(Etablie en FRANCE [{`${new Date().getHours()}:${new Date().getMinutes()}`}])</p>
            </Container>
          </Container>
        </Container>
      </Container>
    </Container>
  );
};

export default Accueil;
