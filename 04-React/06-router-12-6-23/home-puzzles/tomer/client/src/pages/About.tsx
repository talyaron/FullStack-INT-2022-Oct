import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/AboutStyle.scss';
import  ProjectProps  from '../comp/Project/Project';
import NavBar from '../comp/NavBar/NavBar';

interface Project {
    name: string;
    _id:string;
    work: string;
}

const About = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const response = await axios.get('/api/projects/get-projects');
      const projectDB = response.data.project;
      setProjects(projectDB);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <NavBar />
  
      <div className="projects">
        <div className="projects-container">
          {projects.map((project) => (
            <Link
              to={`/about/project/${project._id}`}
              key={project._id}
              className="project-link"
            >
              <ProjectProps project={project} setPlayers={undefined} projects={[]} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
