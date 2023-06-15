import { Link } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";

interface Project {
  _id: string;
  name: string;
  src1: string;
  src2: string;
  src3: string;
  src4: string;
}

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await axios.get("/api/project/get-projects");
        const { data } = response;
        setProjects(data);
      } catch (error: any) {
        console.error(error);
      }
    };

    getProjects();
  }, []);
  return (
    <>
      <NavBar />

      <div className="appBox">
        <header>
          <h1>My Projects</h1>
          <h2>[ Portfolio Gallery ]</h2>
        </header>

        <section className="gallery">
          <div className="row">
            <ul>
              <li>
                <Link to={"/About"}>
                  <img
                    src="https://i.ibb.co/bFB0rJs/Screenshot-2023-06-15-195008.png"
                    alt=""
                  />
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  <img src="" alt="" />
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  <img src="" alt="" />
                </Link>
              </li>
              <li>
                <Link to={"/"}>
                  <img src="" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
