import React from "react";
import "./Hero.css";
import SocialIcons from "../SocialIcons/SocialIcons";
import { Container, Row, Col } from "react-bootstrap";

const Hero = ({ darkMode }) => {
  return (
    <div className={`hero py-5 ${darkMode ? "dark-mode" : "light-mode"}`}>
      <Container className="hero-container d-flex flex-column justify-content-center mt-5">
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <div className="hello-message">Hello!</div>
            <h1 className="display-4 font-weight-bold">
              I'm <span className="fw-bold text-purple">Anish</span> 👋
            </h1>
            <p className="lead">
              UI/UX Designer, Front-End Developer & Thinker.<br />Based in India.
            </p>
            <div className="button-container">
              <button className="download-btn">Download CV</button>
              <button className="git-btn">Get in Touch!</button>
            </div>
          </Col>
          <Col md={6} className="text-center position-relative hero-image-col">
            <div className="blob-background"></div>
            <img
              src="https://c.animaapp.com/mcccefbncmoEYQ/img/hero-image.png"
              alt="Anish Kumar Sinha"
              className="profile-img"
            />
            <div className="email-vertical1"><span className="email-line">|</span> sinhaanishkumar@outlook.com</div>
          </Col>
        </Row>
      </Container>
      <SocialIcons />
    </div>
  );
};

export default Hero;
