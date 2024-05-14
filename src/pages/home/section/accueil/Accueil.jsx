import React from "react"
import { Container } from "react-bootstrap"
import "../../../../app.scss";
import pic1 from './pictures/pic1.jpg';
import pic2 from './pictures/pic2.jpg';
import pic3 from './pictures/pic3.jpg';
import pic4 from './pictures/pic4.jpg';
import pic5 from './pictures/pic5.jpg';
import pic6 from './pictures/pic6.jpg';
import './accueil.scss'

 const Accueil =()=>{
  const d = new Date()
return (
  
  <Container  >
  
      <Container fluid className="mt-5 row w-100 p-2 align-item-center justify-content-start ">

        <Container  className="row col col-md-10  ">
          {/*Column 1 */}
          <Container className="col-3  ">

            <Container className="image mb-4 ">
            <img src={pic1} alt={pic1}  className="img img-fluid   "/>
            </Container>

            <Container className="image mb-4">
            <img src={pic2} alt={pic2}  className="img img-fluid invisible   "/>
            </Container>

            <Container className="image ">
            <img src={pic3} alt={pic3}  className="img img-fluid  "/>
            </Container>

          

          </Container>

          {/*Column 2 */}
          <Container className="col-3 ">
             
          <Container className="image mb-4">
            <img src={pic4} alt={pic4}  className="img img-fluid"/>
            </Container>
<Container></Container>
            <Container className="image  mb-4">
            <img src={pic6} alt={pic6}  className="img img-fluid"/>
            </Container>
            <Container className="image  mb-4">
            <img src={pic5} alt={pic5}  className="img img-fluid"/>
            </Container>
          </Container>

          {/*Column 3 */}
          <Container className="col-5 ms-5 text-light row  d-flex align-items-center ">
            <Container  >
            <h1 className="fw-bold">OCEANE KASINDU</h1>

              <Container fluid className=" d-flex align-items-center justify-content-start subtitle">
              <p className="col-8" >Etudiante en BTS SIO</p>
              <div className="col "></div>
              </Container>  

            <p>(Etablie en FRANCE [{`${d.getHours()}:${d.getMinutes()}`}])</p>
            </Container>
           
          </Container>

            
        </Container>

        
      </Container>
 
  </Container>
)
}

export default Accueil;