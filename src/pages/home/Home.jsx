import React from "react"
import { Container } from "react-bootstrap"
import './home.scss';
import Profil from "./section/accueil/Accueil";
import Navelement from "../../components/navelement/Navelement";
import Videoframe from "./section/videoframe/Videoframe";
import Projets from "./section/projet/Projets.jsx";
import Apropos from "./section/apropos/Apropos";

 const Home =()=>{
return (
<>
<Navelement/>
<Profil/>
<Apropos/>
<Projets/>



</>
)
}

export default Home;

