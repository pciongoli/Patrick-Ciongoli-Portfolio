import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";

const Contact = () => {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
   };

   const handleSubmit = (event) => {
      event.preventDefault();

      emailjs
         .sendForm(
            "service_7s33r82",
            "template_tdt0f4o",
            event.target,
            "wUc891fwSD8ISnQv5"
         )
         .then(
            (result) => {
               console.log(result.text);
               setFormData({ name: "", email: "", message: "" });
               alert("Email sent successfully!");
            },
            (error) => {
               console.log(error.text);
               alert("Failed to send email. Please try again later.");
            }
         );
   };

   return (
      <div className="contact-container">
         <h1>Contact Me</h1>
         <form className="contact-form" onSubmit={handleSubmit}>
            <input
               type="text"
               name="name"
               placeholder="Name"
               value={formData.name}
               onChange={handleChange}
               required
            />
            <input
               type="email"
               name="email"
               placeholder="Email"
               value={formData.email}
               onChange={handleChange}
               required
            />
            <textarea
               name="message"
               placeholder="Message"
               value={formData.message}
               onChange={handleChange}
               required
            />
            <button type="submit">Send</button>
         </form>
      </div>
   );
};

export default Contact;
