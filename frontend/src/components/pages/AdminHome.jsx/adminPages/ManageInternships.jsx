import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGraduate,
  faEdit,
  faTrash,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./adminpage.css";

const dummyInternships = [
  {
    title: "UI/UX Intern",
    company: "Creative Studio",
    status: "Open",
    duration: "3 months", // Added duration
  },
  {
    title: "Frontend Intern",
    company: "Tech Solutions",
    status: "Closed",
    duration: "6 months", // Added duration
  },
  {
    title: "Backend Intern",
    company: "Data Corp",
    status: "Open",
    duration: "4 months", // Added duration
  },
];

const ManageInternships = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [internships, setInternships] = useState(dummyInternships);

  const filteredInternships = internships.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="page-container"
    >
      <h1>
        <FontAwesomeIcon icon={faUserGraduate} /> Manage Internships
      </h1>
      <p>Here are all the internships listed:</p>

      {/* Search Bar */}
      <div style={{ position: "relative" }}>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by title, company, or status..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="search-bar-icon" />
      </div>

      {/* Table */}
      <table className="data-table">
        <thead>
          <tr>
            <th>Internship Title</th>
            <th>Company</th>
            <th>Status</th>
            <th>Duration</th> {/* Added column for duration */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInternships.map((internship, idx) => (
            <tr key={idx}>
              <td>{internship.title}</td>
              <td>{internship.company}</td>
              <td>{internship.status}</td>
              <td>{internship.duration}</td> {/* Displaying duration */}
              <td>
                <button className="action-btn" title="Edit Internship">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="action-btn" title="Delete Internship">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
};

export default ManageInternships;
