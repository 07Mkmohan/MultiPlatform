import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Correct import
import "./AdminHome.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faUser } from "@fortawesome/free-solid-svg-icons";

import DashboardContent from "./adminPages/DashboardContent";
import ManageCourses from "./adminPages/ManageCourses";
import ManageJobs from "./adminPages/ManageJobs";
import ManageInternships from "./adminPages/ManageInternships";
import Applications from "./adminPages/Applications";
import Users from "./adminPages/Users";
import Analytics from "./adminPages/Analytics";
import Settings from "./adminPages/Settings";

const AdminHome = () => {
  const [selectedPage, setSelectedPage] = useState("dashboard");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate(); // ✅ Correct usage

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    console.log("Admin logged out");
    navigate("/login"); // ✅ use "/" for root-relative path
  };

  const handleProfile = () => {
    console.log("Go to profile");
    // Add navigation or modal logic here
    // e.g., navigate("/admin/profile");
  };

  const renderContent = () => {
    switch (selectedPage) {
      case "dashboard":
        return <DashboardContent />;
      case "courses":
        return <ManageCourses />;
      case "jobs":
        return <ManageJobs />;
      case "internships":
        return <ManageInternships />;
      case "applications":
        return <Applications />;
      case "users":
        return <Users />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return <DashboardContent />;
    }
  };

  const navItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "courses", label: "Manage Courses" },
    { id: "jobs", label: "Manage Jobs" },
    { id: "internships", label: "Manage Internships" },
    { id: "applications", label: "Applications" },
    { id: "users", label: "Users" },
    { id: "analytics", label: "Analytics" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="admin-home-layout">
      <nav className="navbar2">
        <h2 className="navbar-title">Admin Panel</h2>

        <div className="navbar-right-section">
          {/* Notification Icon */}
          <div className="notification-icon">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <span className="notification-badge" />
          </div>

          {/* Profile Dropdown */}
          <div className="user-profile" ref={dropdownRef}>
            <span
              className="profile-icon"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <img
                src="https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
                alt="Profile"
                className="profile-image"
              />
            </span>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <button onClick={handleProfile}>
                  <FontAwesomeIcon icon={faUser} /> Profile
                </button>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>

      <div className="main-content-wrapper">
        <aside className="vertical-nav">
          <nav>
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => setSelectedPage(item.id)}
                className={selectedPage === item.id ? "active-link" : ""}
                style={{ cursor: "pointer" }}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </aside>

        <main className="main-content">{renderContent()}</main>
      </div>
    </div>
  );
};

export default AdminHome;
