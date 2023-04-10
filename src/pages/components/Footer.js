import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

const Footer = () => {
   return (
      <footer className="App-footer">
         <div className="icon-container">
            <a
               href="https://github.com/pciongoli"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaGithub />
            </a>
            <a
               href="https://www.linkedin.com/in/patrick-ciongoli-231a32165/"
               target="_blank"
               rel="noopener noreferrer"
            >
               <FaLinkedin />
            </a>
            <a href="mailto:contactpatrickciongoli@gmail.com">
               <FaEnvelope />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
