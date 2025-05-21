import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container" id="home">
      <nav className="navbar">
        <h1>MultiPlatform</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="#services">Services</Link>
          <Link to="#contact">Contact Us</Link>
          <Link to="/register">Get Started</Link>
        </div>
      </nav>

      <main className="main-content">
        <section className="intro" id="services">
          <h2>Welcome to the Future of All-in-One Platforms</h2>
          <p>
            MultiPlatform App brings together the power of job search, skill
            learning, and career building – all in a single intuitive platform.
          </p>
        </section>

        <section id="features" className="features">
          <h3>What You Can Do</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <h4>🔍 Job Portal</h4>
              <p>
                Find and apply for jobs from top companies, build your profile,
                and get career guidance.
              </p>
            </div>
            <div className="feature-card">
              <h4>📚 Online Courses</h4>
              <p>
                Access high-quality courses like Udemy across technology,
                business, and personal development.
              </p>
            </div>
            <div className="feature-card">
              <h4>📈 Skill Tracker</h4>
              <p>
                Track your learning progress, earn certificates, and showcase
                your growth.
              </p>
            </div>
            <div className="feature-card">
              <h4>🧩 One Dashboard</h4>
              <p>
                Seamless user experience with a single account for all services.
              </p>
            </div>
          </div>
        </section>

        <section id="get-started" className="get-started">
          <h3>Get Started Today</h3>
          <p>Sign up now and unlock the full potential of MultiPlatform App!</p>
          <Link to="/register" className="contact-btn">
            Join Now
          </Link>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2025 MultiPlatform App. All rights reserved.</p>
        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#privacy-policy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
