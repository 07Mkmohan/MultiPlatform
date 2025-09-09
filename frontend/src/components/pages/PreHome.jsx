import React from "react";
import { Link } from "react-router-dom";
import { FaUserGraduate, FaBriefcase, FaUserShield } from "react-icons/fa";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import "./Home.css";

import heroDemo from "../../assets/videos/hero-demo.mp4";
import studentGif from "../../assets/gifs/student.gif";
import recruiterGif from "../../assets/gifs/recruiter.gif";
import adminGif from "../../assets/gifs/admin.gif";

const roles = [
  {
    icon: <FaUserGraduate size={35} className="role-icon student" />,
    title: "Students",
    gif: studentGif,
    description:
      "Manage profiles, upload resumes, apply for jobs & track progress.",
  },
  {
    icon: <FaBriefcase size={32} className="role-icon recruiter" />,
    title: "Recruiters",
    gif: recruiterGif,
    description: "Post roles, review applications, and shortlist candidates.",
  },
  {
    icon: <FaUserShield size={32} className="role-icon admin" />,
    title: "Admins",
    gif: adminGif,
    description: "Monitor users, moderate content, and view analytics.",
  },
];

const features = [
  {
    icon: "🔐",
    title: "Secure Login",
    description: "Role-based login for all users.",
  },
  {
    icon: "📄",
    title: "Resume Upload",
    description: "Cloud upload with preview & checks.",
  },
  {
    icon: "📬",
    title: "Instant Alerts",
    description: "Notifications for updates & reviews.",
  },
  {
    icon: "📊",
    title: "Admin Analytics",
    description: "Dashboards for performance tracking.",
  },
  {
    icon: "🗂️",
    title: "Filters & Bookmarks",
    description: "Search jobs & save favorites easily.",
  },
];

function Home() {
  return (
    <div className="home-container">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        options={{
          fullScreen: { enable: true, zIndex: -1 },
          detectRetina: true,
          particles: {
            number: { value: 70 },
            color: { value: "#48bb78" },
            size: { value: 3 },
            move: { speed: 1, outModes: "bounce" },
            opacity: { value: 0.3 },
            links: { enable: true, color: "#667eea", distance: 120 },
          },
        }}
      />

      {/* Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="navbar"
      >
        <h1 className="logo">MultiConnect</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#roles">Roles</a>
          <a href="#features">Features</a>
          <Link to="/register" className="nav-cta">
            Get Started
          </Link>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hero-section"
      >
        <div className="hero-content">
          {/* Left: Video */}
          <div className="hero-video-container">
            <video
              src={heroDemo}
              autoPlay
              loop
              muted
              playsInline
              className="hero-video"
            />
          </div>

          {/* Right: Description */}
          <div className="hero-text">
            <h2>Connecting Talent with Opportunity</h2>
            <p>
              MultiConnect is a one-stop platform bridging the gap between
              students, recruiters, and admins. It simplifies internships and
              job hunting with secure login, resume uploads, role-based
              dashboards, and real-time notifications.
            </p>
            <p>
              Whether you are a student aiming to launch your career, a
              recruiter searching for top talent, or an admin monitoring
              engagement, MultiConnect provides the right tools at your
              fingertips.
            </p>
            <Link to="/register" className="cta-button">
              Get Started
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Roles */}
      <section id="roles" className="roles-section">
        <h3>Who Is It For?</h3>
        <div className="card-grid">
          {roles.map((role) => (
            <motion.div
              key={role.title}
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              {role.icon}
              <h4>{role.title}</h4>
              <div className="role-img-container">
                <img src={role.gif} alt={role.title} className="role-gif" />
              </div>
              <p>{role.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="features-section">
        <h3>Platform Features</h3>
        <div className="card-grid">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card"
            >
              <span className="feature-icon">{f.icon}</span>
              <h4>{f.title}</h4>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        id="get-started"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="cta-section"
      >
        <h3>Ready to Begin?</h3>
        <p>
          Students build careers. Recruiters find talent. Admins manage it all.
        </p>
        <Link to="/register" className="cta-button">
          Join MultiConnect
        </Link>
      </motion.section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 MultiConnect. All rights reserved.</p>
        <div className="footer-links">
          <a href="#roles">About</a>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </footer>
    </div>
  );
}

export default Home;
