
import './projects.scss'
import Navbar from '../components/navbar/Navbar';
import ProjectComp from '../components/ProjectComp/ProjectComp';
import { Outlet } from 'react-router-dom';



const Projects = () => {
  

  return (
    <>
      <Navbar />
      <div className='projectCards'>
      <ProjectComp _id={0} name={''} img={''} description={''}  />
      <Outlet />
    </div>
    </>
  );
};


export default Projects;