import React ,{ useState, useEffect, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import './apropos.scss';
import { GrAdd } from "react-icons/gr";


const Slide1 =()=>{


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
    {/*Page 1*/}
   <Container fluid className="col-12 horizontal-section h-100 d-flex justify-content-center align-items-center">

   
<Container fluid className="row">
{/*a propos de moi */}
<Draggable>
<Container className="profil-container col-md-6  col-sm-12">

<Container id="1" className={`${
     isCont === "1" /*Si le paramètres est de 1, alors on effectue la démarche  */
        ? "pop-out"
        : "pop-in"
    }
    position-relative col-12 profil-div my-5 bg-light shadow-lg p-4 `}>

    <Container className="profil-desc row col-12  mb-3">
        <h1 className="col-10 title">À propos de moi </h1>
        <hr />
      </Container>

      <button  className=" d-flex position-absolute " onClick={()=>togglePop("1")}><GrAdd /></button>

      <Container className="col">
      <p><b>Qui suis-je ? </b> 
      Je suis actuellement étudiante à Melun au <span>lycée Léonard de Vinci</span>ou je poursuis un cursus en BTS SIO (Services Informatiques aux Organisations) option SLAM ( Solutions Logicielles et Applications Métiers ) 
      <br/>
      <br/>
      <b>Pourquoi cette formation ? </b>
      L'option stage s'oriente vers le développement d'application client léger et lourd ! Mon intêret pour l'information m'a amenée à poursuivre ce cursus qui m'a egalement conduit à decouvrir le language python, qui a fait naître en moi un fort intérêt pour la big data et le métier de data scientist</p>
      </Container>

  </Container>
</Container>
</Draggable>


{/*bts sio */}
<Draggable>
  <Container  className= "profil-container col-md-5 col-sm-12 d-flex  justify-content-end">

    <Container  id="2" className= {`${
      isCont === "2"/*Si le paramètres est de 1, alors on effectue la démarche  */
        ? "pop-out"
        :"pop-in "
    } position-relative bg-dark text-light p-4 shadow-lg h-100`}>

      <Container className="col-12 ">
              <h1 className="title">C'est quoi le BTS SIO ?</h1>
              <hr />
              <button  className=" d-flex position-absolute " onClick={()=>togglePop("2")}><GrAdd  /></button>
              </Container>


              <Container className="col ">
                <p>Le BTS SIO forme des professionnels polyvalents en informatique pour les entreprises. Il offre deux options : développement d'applications (option A) et administration de systèmes et réseaux (option B).</p>
                </Container>
            </Container>
      </Container>
  </Draggable>

    </Container>
    
  </Container>

  
    </>
  )
}

export default Slide1;