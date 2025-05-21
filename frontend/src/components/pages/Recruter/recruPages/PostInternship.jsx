import React, { useState } from "react";
import "./recruterpage.css"; // Ensure the path is correct

const PostInternship = () => {
  const [internship, setInternship] = useState({
    title: "",
    company: "",
    location: "",
    duration: "",
    description: "",
    deadline: "",
  });

  const handleChange = (e) => {
    setInternship({ ...internship, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("/api/internships", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(internship),
      });

      alert("Internship posted successfully!");
    } catch (err) {
      console.error("Error posting internship:", err);
    }
  };

  return (
    <div className="internship-form-container">
      <h2>Post an Internship</h2>
      <form className="internship-form" onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Internship Title"
          onChange={handleChange}
        />
        <input
          name="company"
          placeholder="Company Name"
          onChange={handleChange}
        />
        <input name="location" placeholder="Location" onChange={handleChange} />
        <input
          name="duration"
          placeholder="Internship Duration"
          onChange={handleChange}
        />
        <input
          name="deadline"
          placeholder="Application Deadline"
          type="date"
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Internship Description"
          onChange={handleChange}
        />
        <button type="submit">Post Internship</button>
      </form>
    </div>
  );
};

export default PostInternship;
