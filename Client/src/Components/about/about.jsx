import "./About.css";

function About() {
    return (
        <section
    id="about"
    className="about"
    data-aos="fade-up"
>

            <div className="about-left">

                <h2>About Me</h2>

                <p>
                    I'm Harit Sharma, a Computer Science student passionate about
                    Full Stack Web Development, Python, Artificial Intelligence,
                    and solving real-world problems through technology.
                </p>

                <p>
                    I enjoy learning new technologies, building projects, and
                    continuously improving my programming skills.
                </p>

            </div>

            <div className="about-right">

                <div className="about-card">
                    <h3>🎓 Education</h3>
                    <p>B.Tech - Computer Science Engineering</p>
                </div>

                <div className="about-card">
                    <h3>💻 Experience</h3>
                    <p>Python Projects & MERN Development</p>
                </div>

                <div className="about-card">
                    <h3>🚀 Goal</h3>
                    <p>Become a Python Full Stack Software Engineer.</p>
                </div>

            </div>

        </section>
    );
}

export default About;