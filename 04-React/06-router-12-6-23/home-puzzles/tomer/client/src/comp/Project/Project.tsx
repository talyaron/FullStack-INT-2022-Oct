import { FC, SetStateAction } from "react";
import { Project } from "../../App";


interface ProjectProps{
    setPlayers: SetStateAction<any>;
    projects: Project[];
    project: Project;

};
const Project: FC<ProjectProps> = ({ project }) => {

  return (
    <div className="project-container">
      <img
        className="project-img"
        key={project._id}
        src={project.work}
        alt="project"
      />
      <h1>{project.name}</h1>
      
    </div>
  );
};


export default Project
