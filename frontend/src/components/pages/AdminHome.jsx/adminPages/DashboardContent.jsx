import React from "react";
import "./adminpage.css";

const DashboardContent = () => (
  <>
    <h1 className="header">Welcome, Admin!</h1>
    <div className="stats-grid">
      <div className="stats-card">
        <h2>Total Users</h2>
        <p>2,134</p>
      </div>
      <div className="stats-card">
        <h2>Courses</h2>
        <p>127</p>
      </div>
      <div className="stats-card">
        <h2>Jobs Active</h2>
        <p>54</p>
      </div>
      <div className="stats-card">
        <h2>Internships</h2>
        <p>21</p>
      </div>
    </div>
    <div className="recent-activity">
      <h2>Recent Activity</h2>
      <ul>
        <li>✅ New user signed up: John Doe</li>
        <li>📘 New course added: React for Beginners</li>
        <li>💼 New job posted: Frontend Developer</li>
        <li>📨 New internship application received</li>
      </ul>
    </div>
  </>
);

export default DashboardContent;
