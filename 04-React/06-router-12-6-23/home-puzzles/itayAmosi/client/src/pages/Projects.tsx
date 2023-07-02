import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../style/projects.scss";
import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  description: string;
}

const Projects = () => {
  const [projects, setProject] = useState<Project[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/project/get-projects");
      const { Project } = data;
      console.log(Project);
      setProject(Project);
    })();
  }, []);

  return (
    <>
      <NavBar />
      <div className="homepage">
        <div className="navbar"></div>
        <div className="content">
          <h1 className="title">Welcome to My Projects</h1>
          <p className="subtitle">My projects area</p>
          <div className="projects-container">
            <div className="project-card">
              <div className="project-details">
                {projects.map((project, i) => (
                  <h2 key={project._id}>{project.name}</h2>
                ))}
                <Link to={"/projects/bugsLife"}>
                  {projects.map((project, i) => (
                      <img className="project-image" src={project.src1} key={i} />
                      ))}
                </Link>
                {projects.map((project, i) => (
                    <p key={i}>{project.description}</p>
                      ))}
                <Link to="/projects/bugsLife" className="project-link">
                  View Project
                </Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-details">
                <h2>Social Media</h2>
                <Link to={"/home"}>
                  <img
                    src="https://i.ibb.co/bFB0rJs/Screenshot-2023-06-15-195008.png"
                    alt=""
                  />
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Assumenda, molestias accusamus. Obcaecati itaque odit aliquid
                  maiores voluptas excepturi neque dignissimos saepe, corrupti
                  unde rem officiis consequatur quibusdam similique, nam
                  eligendi.
                </p>
                <Link to="/about" className="project-link">
                  View Project
                </Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-details">
                <h2>Soccer Match Finder</h2>
                <Link to={"/home"}>
                  <img
                    src="https://i.ibb.co/bFB0rJs/Screenshot-2023-06-15-195008.png"
                    alt=""
                  />
                </Link>
                <p>
                  Discover soccer matches near you with this innovative website.
                  Using location data, find nearby games and connect with fellow
                  players for exciting matches.
                </p>
                <Link to="/about" className="project-link">
                  View Project
                </Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-details">
                <h2>Soccer Match Finder</h2>
                <Link to={"/home"}>
                  <img
                    src="https://i.ibb.co/bFB0rJs/Screenshot-2023-06-15-195008.png"
                    alt=""
                  />
                </Link>
                <p>
                  Discover soccer matches near you with this innovative website.
                  Using location data, find nearby games and connect with fellow
                  players for exciting matches.
                </p>
                <Link to="/about" className="project-link">
                  View Project
                </Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-details">
                <h2>Soccer Match Finder</h2>
                <Link to={"/home"}>
                  <img
                    src="https://i.ibb.co/bFB0rJs/Screenshot-2023-06-15-195008.png"
                    alt=""
                  />
                </Link>
                <p>
                  Discover soccer matches near you with this innovative website.
                  Using location data, find nearby games and connect with fellow
                  players for exciting matches.
                </p>
                <Link to="/about" className="project-link">
                  View Project
                </Link>
              </div>
            </div>
            <div className="project-card">
              <div className="project-details">
                <h2>Soccer Match Finder</h2>
                <Link to={"/home"}>
                  <img
                    src="https://i.ibb.co/bFB0rJs/Screenshot-2023-06-15-195008.png"
                    alt=""
                  />
                </Link>
                <p>
                  Discover soccer matches near you with this innovative website.
                  Using location data, find nearby games and connect with fellow
                  players for exciting matches.
                </p>
                <Link to="/about" className="project-link">
                  View Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
