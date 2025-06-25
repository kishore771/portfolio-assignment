// src/components/SocialIcons/SocialIcons.js
import React from "react";
import "./SocialIcons.css";
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaTwitter, FaTelegram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <div className="social-icons-bottom">
        <FaFacebook className="social-icon" />
        <FaInstagram className="social-icon" />
        <FaTwitter className="social-icon" />
        <FaGithub className="social-icon" />
        <FaLinkedin className="social-icon" />
        <FaTelegram className="social-icon" />
        <img src="https://i.postimg.cc/0QS4yCQ5/1e6b9db5700719a3e1c00ecd207d5cf97c836be5-1.png" className="social-icon" alt="social-icon"/>
    </div>
  );
};

export default SocialIcons;
