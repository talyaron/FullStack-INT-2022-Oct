import { Link } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("/api/project/get-projects");
        const { data } = response;
        setProjects(data);
      } catch (error: any) {
        console.error(error);
      }
    };

    getProjects();
  }, []);
  return (
    <>
      <NavBar />
      <h1 className="text">
        Hello and welcome to my portfolio site! Here you can see the various
        projects I have worked on recently, both individually and in a team.
        Through these projects, I gained experience building and programming in
        languages such as HTML, SCSS, TypeScript and REACT. Additionally, I
        learned how to use MongoDB, a popular NoSQL database. Thank you for
        visiting my site and I hope you enjoy browsing my work. I have prepared
        for you a selection of projects that you can watch and in addition you
        can comment your personal opinion!
      </h1>
      <h2 className="textLINK">Let's get started:
        <Link to={"/projects"}>projects</Link>

      </h2>
    </>
  );
}

export default App;
