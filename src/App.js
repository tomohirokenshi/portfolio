import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";

const App = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleContactClick = () => {
    console.log("Contact button clicked");
    setFormVisible(true);
  };

  const closeForm = () => {
    setFormVisible(false);
  };

  return (
    <div>
      <NavBar onContactClick={handleContactClick} />
      <Hero onContactClick={handleContactClick} />
      <About />
      <Projects />
      <Timeline onContactClick={handleContactClick} />
      <Footer />
      {isFormVisible && <ContactForm onClose={closeForm} />}
    </div>
  );
};

export default App;
