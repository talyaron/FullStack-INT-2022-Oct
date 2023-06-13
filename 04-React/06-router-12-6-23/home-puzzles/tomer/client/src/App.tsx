import { useState ,useEffect} from 'react'
import axios from 'axios'
import './App.scss'
import NavBar from './comp/NavBar/NavBar'

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

    </>
  )
}

export default App
