import React from "react";
import { Container } from "react-bootstrap";
import './projets.scss';
import frontend from './img/frontend.png';
import webprojet from './img/webprojet.png';
import python from './img/python.png';
import cv_generator from './img/cv_generator.png';
import messagerie from './img/messagerie.png';
import Box from "./Box";

const Projets = () => {
  return (
    <>
      <Container fluid id="projets" className="row d-flex justify-content-center p-4">
        <Container fluid className="row row-cols-2 col-11">

          <Container className="col-12 col-lg-5 col-sm-12 p-4">
            <h1 className="text-light fw-bolder mb-5">Mes Projets.</h1>
            <p className="text-light">Ma passion pour la programmation me pousse constamment à m'améliorer. En dehors de mes heures de cours, <span class='text-decoration-underline'>je consacre mon temps à la réalisation de divers projets</span>, explorant ainsi une multitude de technologies. Parallèlement à ma formation, j'ai également eu l'occasion de concrétiser plusieurs projets, dont voici quelques exemples concrets.</p>
          </Container>

          <Box lg="5" src={frontend} name="Frontend mentor" desc='Regroupement de mes projets web' url='https://ocece77.github.io/frontend-mentor/'/>
          <Box lg="5" src={python} name="Python"  desc='Projets en python !' url='https://github.com/Ocece77/python-project'/>
          <Box lg="5" src={webprojet} name="Projet API"  desc='Regroupement de mes projets web utilisant principalement des API' url='https://ocece77.github.io/Web-Project/'/>
          <Box lg="5" src={cv_generator} name="Createur de CV"  desc='Réalisé avec REACT TS et boostrap, ce projet est un créateur avec un template prédéfini' url='https://ocece77.github.io/cv_creation_app/'/>
          <Box lg="5" src={messagerie} name="Messagerie web "  desc='Postez des messages sur cette mini app web de messagerie' url='https://message-live-app-1.onrender.com'/>

          
        </Container>
      </Container>
    </>
  );
}

export default Projets;
