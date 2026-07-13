import { useState } from "react";
import "./navbar.css";

function Navbar() {

    const [active, setActive] = useState("home");

    return (
        <nav className="navbar">
            <div className="logo">
                <h2>Harit Sharma</h2>
            </div>

            <ul className="nav-links">
    <li>
        <a
            href="#home"
            onClick={() => setActive("home")}
        >
            Home
        </a>
    </li>

    <li>
        <a
            href="#about"
            onClick={() => setActive("about")}
        >
            About
        </a>
    </li>

    <li>
        <a
            href="#skills"
            onClick={() => setActive("skills")}
        >
            Skills
        </a>
    </li>

    <li>
        <a
            href="#projects"
            onClick={() => setActive("projects")}
        >
            Projects
        </a>
    </li>

    <li>
        <a
            href="#contact"
            onClick={() => setActive("contact")}
        >
            Contact
        </a>
    </li>
</ul>
        </nav>
    );
}

export default Navbar;
