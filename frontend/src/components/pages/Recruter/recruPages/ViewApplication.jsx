import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./recruterpage.css";

const ViewApplications = () => {
  const [applications, setApplications] = useState([
    {
      id: 1,
      candidate: "John Doe",
      jobTitle: "Frontend Developer",
      status: "Pending",
    },
    {
      id: 2,
      candidate: "Jane Smith",
      jobTitle: "Marketing Intern",
      status: "Pending",
    },
  ]);

  const updateStatus = (id, newStatus) => {
    setApplications((prev) =>
      prev.map((app) => (app.id === id ? { ...app, status: newStatus } : app))
    );
  };

  return (
    <div className="view-applications-container">
      <div className="view-applications-card">
        <main className="view-applications-content" style={{ width: "100%" }}>
          <h2>All Applications</h2>
          <table>
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Job Title</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app) => (
                <tr key={app.id}>
                  <td>{app.candidate}</td>
                  <td>{app.jobTitle}</td>
                  <td>{app.status}</td>
                  <td>
                    <button
                      className="applicationbutton"
                      onClick={() => updateStatus(app.id, "Shortlisted")}
                    >
                      Shortlist
                    </button>
                    <button
                      className="applicationbutton"
                      onClick={() => updateStatus(app.id, "Rejected")}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </div>
    </div>
  );
};

export default ViewApplications;
