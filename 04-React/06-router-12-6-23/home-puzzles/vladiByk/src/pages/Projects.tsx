import data from "../data/projects.json";

const Projects = () => {
  const projects = data.projects;

  return (
    <div className="projectsPage">
      {projects.map((project) => {
        const img: string = new URL(`${project.image}`, import.meta.url).href;

        return (
          <div className="project">
            <h4>{project.name}</h4>
            <a
              href={project.url}
              target="_blank"
              style={{ background: `url("${img}") no-repeat center / contain` }}
            >
              {/* <img src={img} alt={project.name} /> */}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
