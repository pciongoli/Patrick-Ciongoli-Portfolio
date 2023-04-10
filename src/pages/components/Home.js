import React from "react";
import "../styles/Home.css";
import Typewriter from "typewriter-effect";

const skills = [
   {
      name: "HTML",
      description: "Expert in HTML5, semantic markup, and accessibility.",
   },
   {
      name: "CSS",
      description: "Proficient in CSS, responsive design, and bootstrap",
   },
   {
      name: "JavaScript",
      description:
         "Skilled in vanilla JS, ES6+, and popular libraries and frameworks.",
   },
   // Add more skills as necessary
];

const renderSkills = () => {
   return skills.map((skill) => (
      <div className="skill" key={skill.name}>
         <div className="skill-name">{skill.name}</div>
         <div className="skill-description">{skill.description}</div>
      </div>
   ));
};

const Home = () => {
   return (
      <div className="home-container">
         <h1>
            <Typewriter
               onInit={(typewriter) => {
                  typewriter
                     .typeString("Welcome to My Portfolio")
                     .callFunction(() => {
                        typewriter.stop();
                     })
                     .start();
               }}
            />
         </h1>

         <div className="about-container">
            <h1>About Me</h1>
            <div className="about-content">
               <div className="about-image">
                  <img
                     src="https://via.placeholder.com/150"
                     alt="Patrick Ciongoli"
                  />
               </div>
               <div className="about-text">
                  <p>
                     I graduated from the intensive Rutgers Full Stack Web
                     Development Bootcamp in June 2022, where I learned the MERN
                     stack. My skills include HTML, CSS, JavaScript, Bootstrap,
                     Object-Oriented Programming (OOP), Object-Relational
                     Mapping (ORM), Jest, MySQL, and NoSQL.
                  </p>
                  <p>
                     I am very passionate about web design and being creative. I
                     enjoy turning complex problems into simple, visually
                     appealing designs, and creating intuitive user experiences.
                     My goal is to always keep learning and growing as a
                     developer.
                  </p>
               </div>
            </div>
         </div>
         <div className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-container">{renderSkills()}</div>
         </div>
      </div>
   );
};

export default Home;
