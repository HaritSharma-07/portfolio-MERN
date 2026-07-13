import "./projectcard.css";

function ProjectCard({ project }) {
  return (
    <div className="project-card">

      <img
        src={project.image}
        alt={project.title}
      />

      <div className="project-content">

        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="tech">

          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}

        </div>

        <div className="buttons">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;