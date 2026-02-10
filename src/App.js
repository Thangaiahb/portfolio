import { useState } from "react";
import "./App.css";

import profilePic from "./assets/profile-pic.jpeg"; // ✅ Your Photo

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">

      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">Developer</h2>

        {/* Hamburger Button */}
        <button className="hamburger" onClick={() => setMenuOpen(true)}>
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Sidebar Mobile Menu */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)}>
          ✖
        </button>

        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">

          {/* Left Text */}
          <div>
            <h1>Hi, I'm Arun Thangaiah Balagurusamy</h1>
            <h2>Django & Backend Developer</h2>
            <p>
              Building efficient web applications with Django, REST APIs,
              MySQL, MongoDB and real-time deployment experience.
            </p>

            <div className="buttons">
              <a
                className="btn"
                href="/resume.pdf"
                download
              >
                Download Resume
              </a>

              <a className="btn outline" href="#contact">
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="hero-image">
            <img src={profilePic} alt="Arun Profile" />
          </div>
        </div>
      </section>

      {/* Projects Carousel */}
      <section id="projects" className="projects">
        <h2>My Projects</h2>
        <p>Some of the work I’ve done.</p>

        <div className="carousel">

          {/* Left Button */}
          <button
            className="arrow"
            onClick={() => {
              document.getElementById("project-slider").scrollLeft -= 300;
            }}
          >
            ◀
          </button>

          {/* Slider */}
          <div className="slider" id="project-slider">

            <div className="card">
              <h3>CUMU CRM</h3>
              <p>Educational Management System built with Django.</p>
            </div>

            <div className="card">
              <h3>Catering Order App</h3>
              <p>Online catering & delivery system using Flutter + Firebase.</p>
            </div>

            <div className="card">
              <h3>Employee Dashboard</h3>
              <p>Django + React dashboard with JWT Authentication.</p>
            </div>

            <div className="card">
              <h3>Hospital Management System (HMS)</h3>
              <p>
                React JS + Flask based HMS with MongoDB backend, including patient
                records and appointments.
              </p>
            </div>

            <div className="card">
              <h3>School Fee Collection System</h3>
              <p>
                React + Flask + MongoDB system for fee tracking, payments, and reports.
              </p>
            </div>

          </div>

          {/* Right Button */}
          <button
            className="arrow"
            onClick={() => {
              document.getElementById("project-slider").scrollLeft += 300;
            }}
          >
            ▶
          </button>
        </div>
      </section>


      {/* About */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm Arun Thangaiah Balagurusamy, a Django Backend Developer with
          experience in building real-world applications using Django,
          REST APIs, MySQL, MongoDB, and React.
        </p>

        <div className="skills">
          <span>Django</span>
          <span>REST API</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>React</span>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <h2>Get in Touch</h2>
        <p>Let’s connect.</p>

        <div className="contact-box">
          <p>
            📧 Email:{" "}
            <a href="mailto:arunthangaiahb@gmail.com">
              arunthangaiahb@gmail.com
            </a>
          </p>

          <p>
            🔗 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/arun-thangaiah-balagurusamy-859a37388"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Profile
            </a>
          </p>

          <p>
            💻 GitHub:{" "}
            <a
              href="https://github.com/Thangaiahb"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Thangaiahb
            </a>
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+917397099745">
              +91 7397099745
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        © 2026 Arun Thangaiah Balagurusamy. All Rights Reserved.
      </footer>
    </div>
  );
}
