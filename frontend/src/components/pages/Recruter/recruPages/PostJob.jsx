import React, { useState } from "react";
import "./recruterpage.css"; // Make sure this file exists

const PostJob = () => {
  const [job, setJob] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setJob({ ...job, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(job),
      });

      alert("Job posted successfully!");
    } catch (err) {
      console.error("Error posting job:", err);
    }
  };

  return (
    <div className="job-form-container">
      <h2>Post a Job</h2>
      <form className="job-form" onSubmit={handleSubmit}>
        <input name="title" placeholder="Job Title" onChange={handleChange} />
        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input
          name="deadline"
          placeholder="Application Deadline"
          type="date"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Job Description"
          onChange={handleChange}
        />
        <button type="submit">Post Job</button>
      </form>
    </div>
  );
};

export default PostJob;
