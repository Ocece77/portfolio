import React from "react";
import { Container } from "react-bootstrap";
import './projets.scss';

const Box = (props) => {
  return (
    <Container className={`col-12 col-lg-${props.lg} col-md-5 col-sm-12 mb-4 position-relative img-container `}>
      <img src={props.src} alt={props.src} className="img img-fluid w-100 h-100 rounded" />

      <Container className="top-50 position-absolute z-2 hidden-text text-center ">
        <h1 className="text-light fs-1 fw-bolder">{props.name}</h1>
        <p className="text-light">{props.desc}</p>
        <button className="btn btn-default btn-dark">
          <a className="text-light text-decoration-none" href={props.url} rel="noopener noreferrer">En voir plus</a>
        </button>
      </Container>

    </Container>
  );
}

export default Box;
