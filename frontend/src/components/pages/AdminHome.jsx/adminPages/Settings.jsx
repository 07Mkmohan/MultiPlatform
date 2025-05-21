import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Settings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="page-container"
    >
      <h1>
        <FontAwesomeIcon icon={faCogs} /> Settings
      </h1>
      <p>Adjust your admin preferences below:</p>

      <form>
        <label>
          Notification Email:
          <input type="email" placeholder="admin@example.com" />
        </label>
        <br />
        <label>
          Change Password:
          <input type="password" placeholder="••••••••" />
        </label>
        <br />
        <button type="submit">Save Settings</button>
      </form>
    </motion.div>
  );
};

export default Settings;
