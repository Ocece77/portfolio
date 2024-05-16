import React, { useRef } from 'react';
import { Container } from "react-bootstrap";
import pic1 from './pictures/pic1.jpg';
import pic2 from './pictures/pic2.jpg';
import pic3 from './pictures/pic3.jpg';
import pic5 from './pictures/pic5.jpg';
import pic4 from './pictures/pic4.jpg';
import pic6 from './pictures/pic6.jpg';
import pxArt1 from './pixelpic/pxArt1.png';
import pxArt2 from './pixelpic/pxArt2.png';
import pxArt5 from './pixelpic/pxArt5.png';

import CanvasDraw from 'react-canvas-draw';

import './accueil.scss';
import Navelement from '../../../../components/navelement/Navelement';

const Accueil = () => {
  const canvasRef = useRef(null);


  return (
    <>
    <Navelement/>
    
<Container fluid className='mb-5 ' style={{ position: "relative" }}>
       
        <CanvasDraw 
         className="z-1 position-absolute top-0 start-0 p-5 rounded-3 invisible-sm"
          brushColor="#719EB7"
          brushRadius={2}
          hideGrid={true}
          lazyRadius={0}
          immediateLoading={true}
          style={{ width : '100%' , height : '100%' , backgroundColor: "transparent" }}
        />

      <Container id="accueil" >
        <Container className="h-100 mt-5 row w-100 p-2 align-items-center justify-content-start">
          <Container className="row h-100 col-lg-9 col-md-12">
            {/* Column 1 */}
            <Container className="col-3 col-md-3 col-sm-4">
              <Container className="image mb-4 z-1">
                <img src={pic1} alt={pic1} id="pic1" className="img img-fluid " />
                <img src={pxArt1} alt={pxArt1} className="img img-fluid" />
              </Container>

              <Container className="image mb-4 " >
                <img src={pic4} alt={pic4} id="pic4" className="img img-fluid invisble " />
              </Container>

              <Container className="image">
                <img src={pic3} alt={pic3} id="pic3" className="img img-fluid" />
              </Container>
            </Container>

            {/* Column 2 */}
            <Container className="col-3 col-md-3 col-sm-4">
              <Container className="image mb-4 z-1">
                <img src={pic5} alt={pic5} className="img img-fluid" />
                <img src={pxArt5} alt={pxArt5} className="img img-fluid" />
              </Container>
              <Container className="image mb-4">
                <img src={pic6} alt={pic6} className="img img-fluid" />
              </Container>
              <Container className="image mb-5 z-1">
                <img src={pic2} alt={pic2} className="img img-fluid" />
                <img src={pxArt2} alt={pxArt2} className="img img-fluid" />
              </Container>
            </Container>

            {/* Column 3 */}
            <Container className="col-md-5 col-sm-12 ms-3 text-light row align-items-center">
              <Container>
                <h1 className="fw-bold" >OCEANE KASINDU.</h1>
                <ul style={{ listStyleType: 'square' }}>
                <li className='fs-5'  >Etudiante en <span className='text-decoration-underline'>BTS SIO</span> </li>
                </ul>
               
                <p className='text-uppercase'>(établi en FRANCE [{`${new Date().getHours()}:${new Date().getMinutes()}`}])</p>
                
                  <p className='border border-light p-2'>Disponible pour une alternance.</p>
                  <p className='opacity-25 invisible-sm'>Dessinez sur ma page d'accueil :) </p>

              </Container>
            </Container>
          </Container>
        </Container>
      </Container>


      </Container>

    

    </>
  );
};

export default Accueil;
