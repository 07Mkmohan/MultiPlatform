import React, { useState } from "react";
import "./recruterpage.css";

const ScheduleInterviews = () => {
  const [formData, setFormData] = useState({
    candidateName: "",
    email: "",
    interviewDate: "",
    interviewTime: "",
    interviewer: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Scheduled Interview:", formData);
    alert("Interview Scheduled Successfully!");
    setFormData({
      candidateName: "",
      email: "",
      interviewDate: "",
      interviewTime: "",
      interviewer: "",
      location: "",
    });
  };

  return (
    <div className="schedule-container">
      <h1 className="title">Recruiter Panel - Schedule Interviews</h1>
      <form className="schedule-form" onSubmit={handleSubmit}>
        <label>
          Candidate Name:
          <input
            type="text"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Candidate Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Interview Date:
          <input
            type="date"
            name="interviewDate"
            value={formData.interviewDate}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Interview Time:
          <input
            type="time"
            name="interviewTime"
            value={formData.interviewTime}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Interviewer Name:
          <input
            type="text"
            name="interviewer"
            value={formData.interviewer}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Location / Meeting Link:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Schedule Interview</button>
      </form>
    </div>
  );
};

export default ScheduleInterviews;
