import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Comment from "../components/Comment";
import axios from "axios";
import "../style/bugsLife.scss"


interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
}

const BugsLife = () => {

  const [projects, setProject] = useState<Project[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/project/get-projects");
      const { Project } = data;
      console.log(Project);
      setProject(Project);
    })();
  }, []);

  
  return (
    <>
    <NavBar />
    {projects.map((project, i) => (          
      <section key={i}>
        <div className="box box-1">
          <img src={project.src1} alt="" />
        </div>
        <div className="box box-2">
        <img src={project.src2} alt="" />
        </div>
        <div className="box box-3">
        <img src={project.src3} alt="" />
        </div>
        <div className="box box-4">
        <img src={project.src4} alt="" />
        </div>
      </section>
      ))}
      <Comment />

    </>
  );
};

export default BugsLife;
