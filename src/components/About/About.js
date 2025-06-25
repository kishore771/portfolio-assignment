// src/components/About/About.js
import React from "react";
import "./About.css";
import SocialIcons from "../SocialIcons/SocialIcons";

const About = ({ darkMode }) => {
  return (
    <div className={`about-section ${darkMode ? "dark-mode" : "light-mode"}`} id="about">
      {/* Background Blobs */}
      <div className="grey-blob top-left"></div>
      <div className="yellow-blob top-right"></div>
      <div className="yellow-blob middle"></div>
      <div className="grey-blob bottom-right"></div>

      {/* Hand image */}
      <img
        src="https://i.postimg.cc/RVt6Jyfm/056ab14a60bc4c884db61a37fce7d662bfc6b640.png"
        alt="Anish pointing"
        className="hand-img"
      />

      {/* Content */}
      <div className="about-content-wrapper">
        <h2 className="about-title">
          This is it. ;)<hr className="divider" />
        </h2>
        
        <div className="about-text">
          <p>
            Anish Kr. Sinha is an Indian <strong>UI/UX Designer & Front End Developer</strong> with a passion for designing beautiful and functional user experiences. Typically, he's Driven & permanently Curious. He's obsessed with designing things and even more obsessed with designing cool & clean stuff for the web and mobile. He has been in the business of creating since he hung his first painting on the wall when he was 11.
          </p>
          <p>
            He holds a <strong>bachelor degree in Computer Applications</strong>. During his graduation, he has been actively involved in the web design community for the last 3 years. He has designed websites for small businesses, events, nonprofits and more. Currently he's based in <strong>Bihar, India</strong>, where he's working as an independent creative.
          </p>
          <p>
            His interests, however, extend beyond the web and he loves helping people with branding and print design. He even loves designing <strong>3D floor plans</strong>.
          </p>
          <p>
            When he's not designing, he's probably hanging out with his girlfriend, watching series, sketching or messing around on something inspired by YouTube tutorials.
          </p>
        </div>
        <hr className="bottom-divider" />
      </div>

      {/* Email & Decorations */}
      <div className="email-vertical"><span className="email-icon">|</span>  sinhaanishkumar@outlook.com</div>

      <img
        src="https://c.animaapp.com/mcccmuvtrctuey/img/vector-1.svg"
        alt="side decor"
        className="side-decoration"
      />
      <img
        src="https://c.animaapp.com/mcccmuvtrctuey/img/vector-3.png"
        alt="bottom decor"
        className="bottom-decoration"
      />

      <SocialIcons />
    </div>
  );
};

export default About;

