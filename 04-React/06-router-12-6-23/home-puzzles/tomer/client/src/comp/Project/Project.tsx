import { FC, SetStateAction } from "react";
// import { useParams } from 'react-router-dom';
import { Project } from "../../App";

interface ProjectProps {
  setPlayers: SetStateAction<any>;
  projects: Project[];
  project: Project | undefined;
}

const Project: FC<ProjectProps> = ({ project }) => {
  // const { projectId } = useParams<{ projectId: string }>();

  return (
    <div className="project-container">
      <img
        className="project-img"
        key={project?._id}
        src={project?.work}
        alt="project"
      />
      <h1>{project?.name}</h1>
    </div>
  );
};

export default Project;
