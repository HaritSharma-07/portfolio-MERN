import { motion } from "framer-motion";
import "./hero.css";
import profile from "../../assets/profile.png";

import { TypeAnimation } from "react-type-animation";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Hero() {
  return (
    <section className="hero" id="home">

      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <p className="greeting">👋 Hello, I'm</p>

        <h1>Harit Sharma</h1>

        <TypeAnimation
          sequence={[
            "Full Stack MERN Developer",
            2000,
            "Python Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Problem Solver",
            2000,
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className="typing-text"
        />

        <p className="description">
          Passionate Computer Science student who build this
          modern web applications using React, Node.js,
          Express and MongoDB.
        </p>

        <div className="hero-buttons">
          <button className="resume-btn">
            Download Resume
          </button>

          <a href="#contact" className="contact-btn">
            Contact Me
          </a>
        </div>

        <div className="social-icons">

          <a href="https://github.com/HaritSharma-07" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>

          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://leetcode.com/yourusername" target="_blank" rel="noreferrer">
            <SiLeetcode />
          </a>

          <a href="mailto:haritsharma0807@gmail.com">
            <FaEnvelope />
          </a>

        </div>

      </motion.div>

      <motion.div
        className="hero-image"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={profile} alt="Harit Sharma" />
      </motion.div>

    </section>
  );
}

export default Hero;