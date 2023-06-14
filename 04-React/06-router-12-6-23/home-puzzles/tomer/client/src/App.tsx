import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.scss'
import NavBar from './comp/NavBar/NavBar'
import { Link } from 'react-router-dom';

export interface Project{
  name: string;
  _id:string;
  work: string;
}


function App() {
const [projects, setProjects] = useState<Project[]>([]);
useEffect(()=>{
  async function getPrjects() {
    try {
      const { data } = await axios.get("/api/projects/get-projects");
      const { projects } = data;
      if (!projects) throw new Error("no projects");
      const newprojects = projects.map((project: Project) => ({ ...project }));
      setProjects(newprojects);
    } catch (error) {
      console.error(error);
    }
  }
  getPrjects();
},[]);


return (
  <>
  <NavBar />
  <div className="homepage">
    <div className="navbar">
    </div>
    <div className="content">
      <h1 className="title">Welcome to My Projects</h1>
      <p className="subtitle">Exploring Creativity Through Code</p>
      <div className="projects-container">
        <div className="project-card">
          <div className="project-image">
          </div>
          <div className="project-details">
            <h2>Memory Game</h2>
            <p>
              Engage your memory skills with this fun and challenging Memory
              Game. Test your ability to recall and match pairs of cards in
              the shortest time possible.
            </p>
            <Link to="/about" className="project-link">
              View Project
            </Link>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          </div>
          <div className="project-details">
            <h2>Social Media</h2>
            <p>
              Dive into the world of social interaction with this dynamic
              Social Media platform. Connect with friends, share moments, and
              explore the latest trends in a user-friendly environment.
            </p>
            <Link to="/about" className="project-link">
              View Project
            </Link>
          </div>
        </div>
        <div className="project-card">
          <div className="project-image">
          </div>
          <div className="project-details">
            <h2>Soccer Match Finder</h2>
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
}

export default App
