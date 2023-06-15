import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/navbar/Navbar';


interface Project {
  _id: string;
  name: string;
  img: string;
  description: string;
}

const ProjectDetails: React.FC = () => {
  const { _id } = useParams();
  console.log("_id:",_id) 
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const getProjectDetails = async () => {
      try {
        // console.log(_id)
        // const response = await axios.get(`/api/project/get-Projects-By-Id?projectId=${_id}`);
        // const { data } = response;
        // setProject(data);
      } catch (error: any) {
        console.error(error);
      }
    };

    getProjectDetails();
  }, [_id]);

  if (!project) {
    return null; 
  }

  return (
    <div>
      <Navbar />
      <div className="projectCard">
        <h2>Project Details</h2>
        <h3>{project.name}</h3>
        <img src={project.img} alt="" />
        <p>{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectDetails;