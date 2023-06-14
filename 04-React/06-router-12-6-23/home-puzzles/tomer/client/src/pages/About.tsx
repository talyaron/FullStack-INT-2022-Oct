import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../style/AboutStyle.scss";
import ProjectProps from "../comp/Project/Project";
import NavBar from "../comp/NavBar/NavBar";

interface Project {
  name: string;
  _id: string;
  work: string;
}

const About = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    try {
      const response = await axios.get("/api/projects/get-projects");
      const projectDB = response.data.project;
      setProjects(projectDB);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <NavBar />
      <div className="about-me">
        <h1 className="title">About Me</h1>
        <div className="section">
          <h2 className="section-title">Personal Background</h2>
          <p className="section-content">
            I am 21 years old and live in Modiin, Israel. In the Scopus youth
            movement, I served as a tour guide and worked in a warehouse for two
            years. During school, I focused on studying Theater, a field that
            has always had a strong connection with me.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">Military Experience</h2>
          <p className="section-content">
            In the army, I had the privilege of being a Navigation Instructor at
            Commando School for 2 years. This role taught me valuable skills in
            navigation, team management, and leading expeditions with up to 100
            soldiers.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">Passion for Programming</h2>
          <p className="section-content">
            After completing my military service, I pursued my passion for Web
            and Application Development. I have been immersed in the world of
            web and application development for 8 months now, constantly
            expanding my knowledge and skills. I enjoy exploring both the
            server-side and client-side aspects of programming.
          </p>
        </div>
        <div className="section">
          <h2 className="section-title">Hobbies</h2>
          <p className="section-content">
            When I'm not coding, you can find me indulging in my hobbies, which
            include Surfing, Traveling in Israel, and Playing Computer Games.
            These activities, especially playing computer games, have fueled my
            desire to delve deeper into programming.
          </p>
        </div>
      </div>

      <div className="projects">
        <div className="projects-container">
          {projects.map((project) => (
            <Link
              to={`/about/project/${project._id}`}
              key={project._id}
              className="project-link"
            >
              <ProjectProps
                project={project}
                setPlayers={undefined}
                projects={[]}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
