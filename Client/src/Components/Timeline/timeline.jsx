import "./timeline.css";
import portfolioData from "../../data/portfolioData";

function Timeline() {
  return (
    <section className="timeline-section"
    data-aos="fade-left">

      <h2>Experience & Education</h2>

      <div className="timeline">

        {portfolioData.experience.map((item) => (

          <div className="timeline-item" key={item.id}>

            <div className="timeline-dot"></div>

            <div className="timeline-content">

              <span>{item.year}</span>

              <h3>{item.title}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Timeline;