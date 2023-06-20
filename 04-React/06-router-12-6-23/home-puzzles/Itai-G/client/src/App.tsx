import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ErrorPage from "./pages/ErrorPage";
import FeedbackForm from "./pages/Feedback";
import axios from "axios";
import "./App.css";
import FeedbackCarousel from "./components/FeedbackCarousel/FeedbackCarousel";
import Feedback from "./pages/Feedback";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

const Home: React.FC = () => {
  const [feedbackData, setFeedbackData] = useState<Feedback[]>([]);

  useEffect(() => {
    const fetchFeedbackData = async () => {
      try {
        const response = await axios.get("/api/feedback/get-feedbacks");
        setFeedbackData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchFeedbackData();
  }, []);

  return (
    <div className="home-container">
      <h2>Welcome to the Home Page</h2>
      <p>
        Hi, my name is Itai and I'm learning to be a full-stack developer. I'm passionate about creating innovative web applications and exploring new technologies. Through my journey, I aim to acquire a strong foundation in both frontend and backend development and become proficient in building robust and scalable applications.
      </p>
      <div className="feedback-container">
        <div className="feedback-box">
          <FeedbackCarousel feedbackData={feedbackData} />
        </div>
      </div>
    </div>
  );
};

export default App;
