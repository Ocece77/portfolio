import React ,{ useState, useEffect, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import './apropos.scss';
import { GrAdd } from "react-icons/gr";


const Slide2 =()=>{


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
     {/*Page 2*/}
  <Container fluid className="col-12 horizontal-section h-100 d-flex justify-content-center align-items-center">

   
<Container fluid className="row">
{/*slam */}
<Draggable>
  <Container className="profil-container col-md-5  col-sm-12">

      <Container id="3" className={`${
              isCont === "3" 
                  ? "pop-out"
                  : "pop-in"
              }
              position-relative col-12 profil-div my-5 bg-light shadow-lg p-4 `}>

              <Container className="profil-desc row col-12  ">
                  <h1 className="col-10 title fw-bolder">Option SLAM <br /> <span className="fs-5">(Solutions Logicielles et Applications Métiers) </span></h1>
                  <hr />
                </Container>

                <button  className=" d-flex position-absolute " onClick={()=>togglePop("3")}><GrAdd /></button>

                <Container className="col ">
              <ul>
                <li>Orientée vers le développement d'applications métiers.</li>
                <li>Formation sur la conception, le développement et la maintenance de logiciels répondant aux besoins spécifiques des organisations.</li>
              </ul>
                  </Container>

            </Container>
  </Container>
</Draggable>

{/*sirs */}
<Draggable>
  <Container  className= "profil-container col-md-5 col-sm-12 ">

    <Container  id="4" className= {`${
      isCont === "4"/*Si le paramètres est de 1, alors on effectue la démarche  */
        ? "pop-out"
        :"pop-in "
    } position-relative bg-dark text-light p-4 shadow-lg h-100`}>

      <Container className="col-12 ">
              <h1 className="title fw-bolder">Option SISR <span className="fs-5">(Solutions d'Infrastructure, Systèmes et Réseaux)</span> </h1>
              <hr />
              <button  className=" d-flex position-absolute " onClick={()=>togglePop("4")}><GrAdd  /></button>
              </Container>


              <Container className="col ">
             <ul>
              <li>Axée sur la gestion des infrastructures informatiques.</li>
              <li>Formation sur la conception, la mise en place et la maintenance des systèmes et réseaux informatiques.</li>
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

export default Slide2;