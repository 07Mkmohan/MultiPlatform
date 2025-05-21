import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "./recruterpage.css";

const Dashboard = () => {
  const [filters, setFilters] = useState({
    dateRange: "Last 30 Days",
    jobType: "All",
  });

  const stats = [
    { title: "Jobs Posted", value: 12, icon: "📄" },
    { title: "Internships Posted", value: 8, icon: "🎓" },
    { title: "Applications Received", value: 154, icon: "📥" },
    { title: "Interviews Scheduled", value: 23, icon: "📅" },
    { title: "Messages", value: 6, icon: "✉️" },
  ];

  const barData = [
    { name: "Week 1", Jobs: 3, Internships: 1 },
    { name: "Week 2", Jobs: 2, Internships: 3 },
    { name: "Week 3", Jobs: 4, Internships: 2 },
    { name: "Week 4", Jobs: 3, Internships: 2 },
  ];

  const pieData = [
    { name: "Jobs", value: 12 },
    { name: "Internships", value: 8 },
  ];

  const COLORS = ["#0088FE", "#00C49F"];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
      <p className="dashboard-subtitle">
        Here is a quick summary of your activity.
      </p>

      <div className="filters">
        <select
          name="dateRange"
          value={filters.dateRange}
          onChange={handleFilterChange}
        >
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Year</option>
        </select>

        <select
          name="jobType"
          value={filters.jobType}
          onChange={handleFilterChange}
        >
          <option>All</option>
          <option>Jobs</option>
          <option>Internships</option>
        </select>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h3>{stat.value}</h3>
              <p>{stat.title}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Bar Chart */}
      <div className="charts-row">
        <div className="chart-container half-chart">
          <h2>Post Trends (Weekly)</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={barData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Jobs" fill="#8884d8" />
              <Bar dataKey="Internships" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="chart-container half-chart">
          <h2>Posts Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
