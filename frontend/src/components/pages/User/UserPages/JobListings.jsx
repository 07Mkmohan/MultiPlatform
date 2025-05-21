import React, { useState } from "react";
import "./userpage.css";

const demoJobs = [
  {
    id: 1,
    title: "Frontend Developer",
    company: "Tech Co",
    location: "Remote",
    salary: "$70k - $90k",
    type: "Full-Time",
    posted: "2 days ago",
    description:
      "Looking for a React developer with 3+ years of experience. Experience in Tailwind CSS is a bonus.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS08PWzYqFQhZa6ScmNdg6FGRqVYhy5_3u-khpDeO_BY237_6j9qN9vQjuFUe-cYHfuNF8&usqp=CAU",
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "Startup Inc",
    location: "New York, NY",
    salary: "$100k - $120k",
    type: "Hybrid",
    posted: "1 week ago",
    description:
      "Work on scalable Node.js APIs and microservices. MongoDB, Redis knowledge required.",

    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsoKNZMq3iw0mIbCMZMZIfR22Fv0gsX8ZoPw&s",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Creative Studio",
    location: "Remote",
    salary: "$60k - $80k",
    type: "Part-Time",
    posted: "3 days ago",
    description:
      "Design user-centric mobile and web interfaces using Figma and Adobe XD.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hK2N2inYpzDkqrYwvoPYB-3Tr1YpWBITuQ&s",
  },
];

const JobListings = () => {
  const [jobs] = useState(demoJobs);
  const [locationFilter, setLocationFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [selectedJob, setSelectedJob] = useState(null);

  const filteredJobs = jobs.filter((job) => {
    return (
      (locationFilter === "" || job.location === locationFilter) &&
      (typeFilter === "" || job.type === typeFilter)
    );
  });

  return (
    <div className="job-listings-container">
      <h3>Job Listings</h3>

      {/* Filters */}
      <div className="filters">
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
        >
          <option value="">All Locations</option>
          {[...new Set(jobs.map((j) => j.location))].map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          <option value="">All Types</option>
          {[...new Set(jobs.map((j) => j.type))].map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Job Cards */}
      <div className="job-list">
        {filteredJobs.length === 0 ? (
          <p>No jobs match your filters.</p>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="job-card"
              onClick={() => setSelectedJob(job)}
            >
              <img src={job.logo} alt={`${job.company} logo`} />
              <div className="job-info">
                <h4>{job.title}</h4>
                <p>
                  <strong>{job.company}</strong> — {job.location}
                </p>
                <p>
                  {job.salary} · {job.type}
                </p>
                <small>{job.posted}</small>
                <p className="job-desc">{job.description}</p>
                <button
                  className="apply-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Apply clicked!");
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {selectedJob && (
        <div className="modal-backdrop" onClick={() => setSelectedJob(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedJob.title}</h2>
            <p>
              <strong>{selectedJob.company}</strong> — {selectedJob.location}
            </p>
            <p>
              {selectedJob.salary} · {selectedJob.type}
            </p>
            <p>
              <strong>Posted:</strong> {selectedJob.posted}
            </p>
            <p>{selectedJob.description}</p>
            <button onClick={() => setSelectedJob(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobListings;
