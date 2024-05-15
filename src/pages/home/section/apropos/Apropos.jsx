import React ,{ useState, useEffect, useLayoutEffect } from "react";
import Draggable from "react-draggable";
import { Container } from "react-bootstrap";
import './apropos.scss';
import { GrAdd } from "react-icons/gr";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; 
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";




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

   <Container className="nav-title row position-absolute" >

       <h1 className=" fw-bold ">A Propos.</h1>
       <span className="fs-5">Vous pouvez bougez les elements</span>
   </Container>

   {/*Page 1*/}
  <Slide1/>
      
  {/*Page 2*/}
  <Slide2/>
  {/*Page 3*/}
   <Slide3/>
   {/*Page 4*/}

   <Slide4/>



  </Container>
  </>
)
}

export default Apropos;