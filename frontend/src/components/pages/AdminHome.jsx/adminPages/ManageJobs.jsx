import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import "./adminpage.css";

const ManageJobs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="page-container"
    >
      <h1>
        <FontAwesomeIcon icon={faBriefcase} /> Manage Jobs
      </h1>
      <p>All posted jobs are listed below:</p>

      <table className="data-table">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Company</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Frontend Developer</td>
            <td>ABC Tech</td>
            <td>Open</td>
            <td>
              <button>Edit</button> <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default ManageJobs;
