import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Analytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="page-container"
    >
      <h1>
        <FontAwesomeIcon icon={faChartLine} /> Analytics
      </h1>
      <p>Platform statistics and user metrics:</p>

      <ul>
        <li>Total Users: 2,134</li>
        <li>Active Courses: 127</li>
        <li>Job Posts: 54</li>
        <li>Internship Posts: 21</li>
      </ul>
    </motion.div>
  );
};

export default Analytics;
