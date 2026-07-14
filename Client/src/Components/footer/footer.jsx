import "./footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">

            <div className="footer-content">

                <h2>Harit Sharma</h2>

                <p>
                    Passionate Computer Science student building modern web
                    applications using the Python Full Stack Development.
                </p>

                <div className="footer-icons">

                    <a
                        href="https://github.com/HaritSharma-07"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://linkedin.com/in/harit-sharma-266401376"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://leetcode.com/YOUR_LEETCODE_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SiLeetcode />
                    </a>

                    <a href="mailto:haritsharma0807@gmail.com">
                        <FaEnvelope />
                    </a>

                </div>

                <div className="footer-links">

                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>

                </div>

                <hr />

                <p className="copyright">
                    © {year} Harit Sharma. All Rights Reserved.
                </p>

            </div>

        </footer>
    );
}

export default Footer;
