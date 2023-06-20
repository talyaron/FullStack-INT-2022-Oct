import NavBar from "../components/NavBar";
import "../style/projects.scss";
import ProjectCard from "../components/ProjectCard";
import { Outlet } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className="homepage">
        <div className="navbar"></div>
        <div className="content">
          <h1 className="title">Welcome to My Projects</h1>
          <p className="subtitle">My projects area</p>
          <div className="projects-container">
            <ProjectCard _id={""} name={""} src1={""} src2={""} src3={""} src4={""} description={""} />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Projects;
