import React ,{ useState, useEffect, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import './apropos.scss';
import Level from "./Level";


const Slide3 =()=>{


const [isCont , setContActive] = useState(null);

const togglePop = (id) =>{ 
  setContActive( id ) /*On met le variable state au numéro de id*/
  setTimeout(()=>{
    setContActive( null) /*On met la variable state à sont état initiale*/
  }, 300);
  return id
 
}
  return(
    <>
     
 {/*Page 3*/}
 <Container fluid className="col-12 horizontal-section h-100 d-flex justify-content-center align-items-center">

   
<Container fluid className="col-12 row  w-100">

{/*Mes Qualités */}
<Draggable>
  <Container  className= "profil-container col-md-5 p-4 col-sm-12 ">

    <Container  className= "row col-md-12 bg-dark text-light mb-5 p-4 shadow-lg h-100">

            <Container className="col-12 ">
              <h1 className="title fw-bolder text-uppercase">Mes qualités.</h1>
              <hr />
              </Container>

                <Container className="row col-12">
                <p>Soft skills.</p>
                  <ul className="list-group list-group-flush ">
                  <li className="list-group-item">Travail en équipe</li>
                  <li className="list-group-item">Autonomie</li>
                  <li className="list-group-item">Curiosité</li>
                  <li className="list-group-item">Prise d'initiative</li>
                  <li className="list-group-item">Créativité</li>
                  <li className="list-group-item">Dynamique</li>
                  
                </ul>
                </Container>

           

            </Container>

      </Container>
 </Draggable>



{/*Mes compétences */}
<Draggable>
  <Container  className= "profil-container col-md-5 col-sm-12 d-flex  ">
    <Container  className= "position-relative bg-light p-4 shadow-lg h-100">

             <Container className="col-12 ">
              <h1 className="title fw-bolder text-uppercase">Mes compétences.</h1>
              <hr />
              </Container>

                  <Container className="col">
                  <p className="">Developement.</p>
                  <ul className="list-group list-group-flush mb-5">

                  <li className="list-group-item d-flex justify-content-between d-flex justify-content-between">Kotlin 
                    <Level dot4="empty"/>
                    </li>

                  <li className="list-group-item d-flex justify-content-between">Python
                  <Level dot4="empty"/>
                    </li>

                    
                  <li className="list-group-item d-flex justify-content-between">php
                  <Level  dot2="empty" dot3="empty" dot4="empty"/>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">javascript
                 <Level dot4="empty"/>
                    </li>

                  <li className="list-group-item d-flex justify-content-between">React JS
                  <Level  dot3="empty" dot4="empty"/>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">SQL
                  <Level  dot4="empty"/>
                  </li>
                </ul>

                <p>Réseaux.</p>
                  <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between">Création de machine virtuel 
                  <Level  dot2="empty" dot3="empty" dot4="empty"/>
                  
                  </li>

                  <li className="list-group-item d-flex justify-content-between">TCP / IP
                  
                  <Level dot3="empty" dot4="empty"/>
                
                  </li>

                  <li className="list-group-item d-flex justify-content-between">Adressage IP
                  <Level  dot2="empty" dot3="empty" dot4="empty"/>
                  </li>
          
                </ul>

                </Container>
                
            </Container>
  </Container>
</Draggable>

    </Container>

 

  </Container>

  
    </>
  )
}

export default Slide3;