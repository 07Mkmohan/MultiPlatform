import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Applications = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="page-container"
    >
      <h1>
        <FontAwesomeIcon icon={faFileAlt} /> Applications
      </h1>
      <p>Review received applications below:</p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Applicant Name</th>
            <th>Position</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Smith</td>
            <td>Frontend Intern</td>
            <td>Pending</td>
            <td>
              <button>View</button> <button>Reject</button>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default Applications;
