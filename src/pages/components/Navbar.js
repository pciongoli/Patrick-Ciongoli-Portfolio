import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ setCurrentPage }) => {
   return (
      <header className="App-header">
         <h1>Patrick Ciongoli</h1>
         <nav>
            <button onClick={() => setCurrentPage("home")}>Home</button>
            <button onClick={() => setCurrentPage("projects")}>Projects</button>
            <button onClick={() => setCurrentPage("skills")}>Skills</button>
            <button onClick={() => setCurrentPage("contact")}>Contact</button>
         </nav>
      </header>
   );
};

export default Navbar;
