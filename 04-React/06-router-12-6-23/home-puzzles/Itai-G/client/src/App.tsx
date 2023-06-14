import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ErrorPage from "./pages/ErrorPage";

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
  return <h2>Welcome to the Home Page</h2>;
};

export default App;
