import "./Projects.css";
import portfolioData from "../../data/portfolioData";
import ProjectCard from "../ProjectCard/ProjectCard";

function Projects() {
  return (
    <section className="projects" id="projects"
    data-aos="zoom-in">

      <h2>Projects</h2>

      <div className="projects-grid">

        {portfolioData.projects.map((project) => (
  <ProjectCard key={project.id} project={project} />
))}

      </div>

    </section>
  );
}

export default Projects;
