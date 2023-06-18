import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ErrorPage from "./pages/ErrorPage";
import './App.css'; 

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="home-container"> {/* Add the class name */}
      <h2>Welcome to the Home Page</h2>
      <p>About Me:</p>
      <p>
        Hi, my name is Itai and I'm learning to be a full-stack developer. I'm passionate about creating innovative web applications and exploring new technologies. Through my journey, I aim to acquire a strong foundation in both frontend and backend development and become proficient in building robust and scalable applications.
      </p>
    </div>
  );
};

export default App;