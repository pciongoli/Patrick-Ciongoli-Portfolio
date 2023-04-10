import React, { useState } from "react";
import "./App.css";
import NavBar from "./pages/components/Navbar";
import Home from "./pages/components/Home";
import Projects from "./pages/components/Projects";
import Skills from "./pages/components/Skills";
import Contact from "./pages/components/Contact";
import Footer from "./pages/components/Footer";

function App() {
   const [currentPage, setCurrentPage] = useState("home");

   const renderPage = () => {
      switch (currentPage) {
         case "home":
            return <Home />;
         case "projects":
            return <Projects />;
         case "skills":
            return <Skills />;
         case "contact":
            return <Contact />;
         default:
            return <Home />;
      }
   };

   return (
      <div className="App">
         <NavBar setCurrentPage={setCurrentPage} />
         <main>{renderPage()}</main>
         <Footer />
      </div>
   );
}

export default App;
