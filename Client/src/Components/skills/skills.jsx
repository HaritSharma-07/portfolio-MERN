import "./skills.css";
import portfolioData from "../../data/portfolioData";

function Skills() {
    return (
        <section
    id="skills"
    className="skills"
    data-aos="zoom-in"
>
            <h2>My Skills</h2>

            <div className="skills-container">

                {portfolioData.skills.map((skill) => (

                    <div className="skill-card" key={skill.name}>

                        <h3>{skill.name}</h3>

                        <span className="category">
                            {skill.category}
                        </span>

                        <div className="progress">

                            <div
                                className="progress-bar"
                                style={{ width: `${skill.level}%` }}
                            ></div>

                        </div>

                        <p>{skill.level}%</p>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Skills;