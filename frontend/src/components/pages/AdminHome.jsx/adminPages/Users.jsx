import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faEdit,
  faTrash,
  faSearch,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Modal from "react-modal";
import "./adminpage.css";

const initialUsers = [
  {
    username: "john_doe",
    email: "john@example.com",
    role: "Student",
    status: "Active",
    lastLogin: "2025-05-14T10:15:00",
  },
  {
    username: "admin_01",
    email: "admin@example.com",
    role: "Admin",
    status: "Inactive",
    lastLogin: "2025-05-13T08:30:00",
  },
  // Add more users if needed
];

const Users = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  const filteredUsers = users.filter((user) =>
    Object.values(user).some((val) =>
      val.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const openModal = (user) => {
    setSelectedUser({ ...user }); // create editable copy
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalIsOpen(false);
  };

  const formatLogin = (dateStr) => {
    const options = { weekday: "long", hour: "2-digit", minute: "2-digit" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  const saveUserChanges = () => {
    setUsers((prev) =>
      prev.map((user) =>
        user.email === selectedUser.email ? selectedUser : user
      )
    );
    closeModal();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="admin-users-container"
    >
      <h1 className="admin-users-title">
        <FontAwesomeIcon icon={faUsers} /> Manage Users
      </h1>

      {/* Search */}
      <div className="admin-users-search-container">
        <input
          type="text"
          placeholder="Search users..."
          className="admin-users-search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="admin-users-search-icon" />
      </div>

      {/* Table */}
      <table className="admin-users-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Last Login</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.length > 0 ? (
            currentUsers.map((user, index) => (
              <tr key={index} className="admin-users-row">
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span
                    className={`admin-users-status ${
                      user.status === "Active"
                        ? "admin-users-status-active"
                        : "admin-users-status-inactive"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>{formatLogin(user.lastLogin)}</td>
                <td>
                  <button
                    className="admin-users-action-btn"
                    onClick={() => openModal(user)}
                    title="Edit User"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    className="admin-users-action-btn delete"
                    title="Delete User"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="admin-users-empty">
                No users match your search.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="admin-users-pagination">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          <FontAwesomeIcon icon={faChevronLeft} /> Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>

      {/* User Edit Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="admin-users-modal"
        overlayClassName="admin-users-modal-overlay"
        ariaHideApp={false}
      >
        <h2>Edit User</h2>
        {selectedUser && (
          <div className="admin-users-modal-form">
            <label>
              Username:
              <input
                type="text"
                value={selectedUser.username}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, username: e.target.value })
                }
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                value={selectedUser.email}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, email: e.target.value })
                }
              />
            </label>
            <label>
              Role:
              <select
                value={selectedUser.role}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, role: e.target.value })
                }
              >
                <option>Student</option>
                <option>Admin</option>
                <option>Instructor</option>
              </select>
            </label>
            <label>
              Status:
              <select
                value={selectedUser.status}
                onChange={(e) =>
                  setSelectedUser({ ...selectedUser, status: e.target.value })
                }
              >
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </label>
            <p>
              <strong>Last Login:</strong> {formatLogin(selectedUser.lastLogin)}
            </p>
            <div className="admin-users-modal-actions">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={saveUserChanges}>Save Changes</button>
            </div>
          </div>
        )}
      </Modal>
    </motion.div>
  );
};

export default Users;
