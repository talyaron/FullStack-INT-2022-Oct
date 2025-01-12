import React, { useEffect, useState } from 'react';
import { Link, Outlet, useRouteMatch } from 'react-router-dom';
import axios from 'axios';
import './projects.scss'
import Navbar from '../components/navbar/Navbar';

interface Project {
  _id: number;
  name: string;
  img: string;
  description: string;
}

const Projects: React.FC = () => {
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
      <Navbar />
      <div className="projectCard">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project._id}>
            <Link to={`/projects/${project._id}`}>
              <h3>{project.name}</h3>
            </Link>
            <img src={project.img} alt="" />
            <p>{project.description}</p>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Projects;