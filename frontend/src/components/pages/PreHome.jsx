import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <main className="main-content">
        <section className="intro">
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

        <section id="contact" className="contact">
          <h3>Have Questions?</h3>
          <p>
            Reach out to our support team or explore FAQs to get help instantly.
          </p>
          <button className="contact-btn">Contact Us</button>
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
