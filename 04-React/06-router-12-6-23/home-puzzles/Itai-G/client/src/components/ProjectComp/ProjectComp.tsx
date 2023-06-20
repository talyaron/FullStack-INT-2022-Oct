import axios from 'axios';
import { FC, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


interface Project {
    _id: number;
    name: string;
    img: string;
    description: string;
  }

const ProjectComp:FC<Project> = () => {
    const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get('/api/project/get-projects');
        const { data } = response;
        setProjects(data);
      } catch (error: any) {
        console.error(error);
      }
    };

    getProjects();
  }, []);
  return (
    <div>
        <h2>Projects</h2>
        {projects.map((project,_id) => (
        <div className="projectCard">
          <div key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.name}</h3>
            </Link>
            <img src={project.img} alt="" />
          </div>
          </div>
        ))}
      </div>
  )
}

export default ProjectComp