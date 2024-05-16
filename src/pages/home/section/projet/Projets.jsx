import React from "react";
import { Container } from "react-bootstrap";
import './projets.scss';
import frontend from './img/frontend.png';
import kotlin from './img/kotlin.png';
import webprojet from './img/webprojet.png';
import geoworld from './img/geoworld.png';
import python from './img/python.png';
import rps from "./img/rps.png";
import acf2l from './img/acf2l.jpg';
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

          <Box lg="5" src={frontend} name="Frontend mentor" desc='Regroupement de mes projets web' url='https://github.com/Ocece77/frontend-mentor'/>
          <Box lg="5" src={kotlin} name="Kotlin"  desc='Projets Kotlin réalisé en BTS' url='https://github.com/Ocece77/Kotlin_project'/>
          <Box lg="5" src={python} name="Python"  desc='Projets en python !' url='https://github.com/Ocece77/python-project'/>
          <Box lg="11" src={webprojet} name="Projet API"  desc='Regroupement de mes projets web utilisant principalement des API' url='https://github.com/Ocece77/Web-Project'/>
          <Box lg="5" src={geoworld} name="Geoworld"  desc='Projets Geoworld réalisé pour mon BTS SIO'  url='https://github.com/Ocece77/geoworld'/>
          <Box lg="5" src={acf2l} name="ACF2L"  desc='Projet de groupe nommée AC2FL réalisé pour mon BTS SIO '  url='https://github.com/Ocece77/ACF2L'/>
          <Box lg="11" src={rps} name="RPS"  desc='Pierre feuille papier et ciseaux !'  url='https://github.com/Ocece77/geoworld'/>

        </Container>
      </Container>
    </>
  );
}

export default Projets;
