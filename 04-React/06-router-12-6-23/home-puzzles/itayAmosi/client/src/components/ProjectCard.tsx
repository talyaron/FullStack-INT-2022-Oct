import axios from "axios";
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
  description: string;
}
  


const ProjectCard: FC<Project> = () => {

  const [projects, setProject] = useState<Project[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/api/project/get-projects`);
      console.log(data);
        const { projectDB } = data
      setProject(projectDB);
    })();
  }, []);
  return (
    <>
      {projects.map((project, _id) => (
        <div className="project-card">
          <div className="project-details">
            <h2 key={project._id}>{project.name}</h2>
            <img className="project-image" src={project.src1} key={project._id} />
            <p key={project._id}>{project.description}</p>
            <Link key={project._id} to={`/projects/${project._id}`} className="project-link">
                  View Project
                </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectCard;
