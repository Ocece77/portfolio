import React ,{ useState, useEffect, useLayoutEffect } from "react";

import { Container } from "react-bootstrap";
import './apropos.scss';
import { GrAdd } from "react-icons/gr";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 




gsap.registerPlugin(ScrollTrigger);

const Apropos =()=>{


const [isCont , setContActive] = useState(null);

const togglePop = (id) =>{ 
  setContActive( id ) /*On met le variable state au numéro de id*/
  setTimeout(()=>{
    setContActive( null) /*On met la variable state à sont état initiale*/
  }, 300);
  return id
 
}

React.useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // ---------- selecting all horizontal sections
    const horizontalSections = gsap.utils.toArray(".horizontal-section");

    // ---------- applying horizontal scroll animation
    gsap.to(horizontalSections, {
      xPercent: -100 * (horizontalSections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#apropos",
        pin: true,
        scrub: 1,
        snap: 1 / (horizontalSections.length - 1),
        end: () => "+=" + document.querySelector("#apropos").offsetWidth
      }
    });
  });

  return () => ctx.revert();
}, []);



return (
  <>
   <Container fluid id='apropos'>

   <Container className="nav-title row position-absolute">
       <h1 className="fs-1 fw-bold mb-5">A Propos.</h1>
   </Container>

   {/*Page 1*/}
   <Container fluid className="col-12 horizontal-section h-100 d-flex justify-content-center align-items-center">

   
    <Container fluid className="row">
   {/*a propos de moi */}
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

   {/*bts sio */}
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

        </Container>
      </Container>

      
  {/*Page 2*/}
  <Container fluid className="col-12 horizontal-section h-100 d-flex justify-content-center align-items-center">

   
<Container fluid className="row">
{/*slam */}
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

{/*sirs */}
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

    </Container>
  </Container>

 
 {/*Page 3*/}
 <Container fluid className="col-12 horizontal-section h-100 d-flex justify-content-center align-items-center">

   
<Container fluid className="row">

{/*Mes Qualités */}
  <Container  className= " profil-container col-md-12 col-sm-12 d-flex  ">
    <Container  className= "position-relative bg-dark text-light p-4 shadow-lg h-100">

            <Container className="col-12 ">
              <h1 className="title fw-bolder text-uppercase">Mes qualités.</h1>
              <hr />
              </Container>

                <Container className="col">
                <p >Soft skils.</p>
                  <ul class="list-group list-group-flush mb-5">
                  <li class="list-group-item">Travail en équipe</li>
                  <li class="list-group-item">Autonomie</li>
                  <li class="list-group-item">Curiosité</li>
                  <li class="list-group-item">Prise d'initiative</li>
                  <li class="list-group-item">Créativité</li>
                  <li class="list-group-item">Dynamique</li>
                </ul>
                </Container>

            </Container>
      </Container>
    </Container>

{/*Mes compétences */}
<Container  className= "profil-container col-md-6 col-sm-12 d-flex  ">
    <Container  className= "position-relative bg-light p-4 shadow-lg h-100">

             <Container className="col-12 ">
              <h1 className="title fw-bolder text-uppercase">Mes compétences.</h1>
              <hr />
              </Container>

                  <Container className="col">
                  <p className="">Developement.</p>
                  <ul class="list-group list-group-flush mb-5">
                  <li class="list-group-item">Kotlin</li>
                  <li class="list-group-item">Python</li>
                  <li class="list-group-item">php</li>
                  <li class="list-group-item">javascript</li>
                  <li class="list-group-item">React JS</li>
                  <li class="list-group-item">SQL</li>
                </ul>

                <p>Réseaux.</p>
                  <ul class="list-group list-group-flush">
                  <li class="list-group-item">Création de machine virtuel (Windows 10, Windows serveur, Linux)</li>
                  <li class="list-group-item">TCP / IP</li>
          
                </ul>

                </Container>
                
            </Container>
      </Container>




  </Container>




  </Container>
  </>
)
}

export default Apropos;