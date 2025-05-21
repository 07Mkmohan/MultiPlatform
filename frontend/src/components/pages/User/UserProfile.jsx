import React, { useState, useEffect, useRef } from "react";
import "./userprofile.css";

const ProfilePage = () => {
  // State for different sections
  const [basicInfo, setBasicInfo] = useState(() => {
    const saved = localStorage.getItem("basicInfo");
    return saved
      ? JSON.parse(saved)
      : {
          fullName: "",
          email: "",
          mobile: "",
          location: "",
          relocate: false,
          dob: "",
          gender: "",
        };
  });

  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem("education");
    return saved
      ? JSON.parse(saved)
      : {
          tenth: "",
          twelfth: "",
          degree: "",
          degreeCollege: "",
          degreeSpecialization: "",
          degreeYear: "",
          degreeCGPA: "",
        };
  });

  const [projects, setProjects] = useState(() => {
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem("skills");
    return saved ? JSON.parse(saved) : [];
  });

  const [internships, setInternships] = useState(() => {
    const saved = localStorage.getItem("internships");
    return saved ? JSON.parse(saved) : [];
  });

  const [certifications, setCertifications] = useState(() => {
    const saved = localStorage.getItem("certifications");
    return saved ? JSON.parse(saved) : [];
  });

  const [achievements, setAchievements] = useState(() => {
    const saved = localStorage.getItem("achievements");
    return saved ? JSON.parse(saved) : [];
  });

  const [onlineProfiles, setOnlineProfiles] = useState(() => {
    const saved = localStorage.getItem("onlineProfiles");
    return saved
      ? JSON.parse(saved)
      : { github: "", linkedin: "", leetcode: "", portfolio: "" };
  });

  const [careerObjective, setCareerObjective] = useState(() => {
    const saved = localStorage.getItem("careerObjective");
    return saved ? JSON.parse(saved) : "";
  });

  const [resume, setResume] = useState(null);

  const [newProject, setNewProject] = useState("");
  const [newSkill, setNewSkill] = useState("");
  const [newInternship, setNewInternship] = useState("");
  const [newCertification, setNewCertification] = useState("");
  const [newAchievement, setNewAchievement] = useState("");

  const profileRef = useRef();

  // Save to localStorage on change
  useEffect(() => {
    localStorage.setItem("basicInfo", JSON.stringify(basicInfo));
  }, [basicInfo]);

  useEffect(() => {
    localStorage.setItem("education", JSON.stringify(education));
  }, [education]);

  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("skills", JSON.stringify(skills));
  }, [skills]);

  useEffect(() => {
    localStorage.setItem("internships", JSON.stringify(internships));
  }, [internships]);

  useEffect(() => {
    localStorage.setItem("certifications", JSON.stringify(certifications));
  }, [certifications]);

  useEffect(() => {
    localStorage.setItem("achievements", JSON.stringify(achievements));
  }, [achievements]);

  useEffect(() => {
    localStorage.setItem("onlineProfiles", JSON.stringify(onlineProfiles));
  }, [onlineProfiles]);

  useEffect(() => {
    localStorage.setItem("careerObjective", JSON.stringify(careerObjective));
  }, [careerObjective]);

  const handleInputChange = (e, section) => {
    const { name, value } = e.target;
    if (section === "basicInfo") {
      setBasicInfo((prev) => ({ ...prev, [name]: value }));
    } else if (section === "education") {
      setEducation((prev) => ({ ...prev, [name]: value }));
    } else if (section === "onlineProfiles") {
      setOnlineProfiles((prev) => ({ ...prev, [name]: value }));
    } else if (section === "careerObjective") {
      setCareerObjective(value);
    }
  };

  const handleAddItem = (item, section) => {
    if (item.trim()) {
      if (section === "projects") {
        setProjects((prev) => [...prev, item.trim()]);
      } else if (section === "skills") {
        setSkills((prev) => [...prev, item.trim()]);
      } else if (section === "internships") {
        setInternships((prev) => [...prev, item.trim()]);
      } else if (section === "certifications") {
        setCertifications((prev) => [...prev, item.trim()]);
      } else if (section === "achievements") {
        setAchievements((prev) => [...prev, item.trim()]);
      }
    }
  };

  const handleResumeUpload = (e) => {
    if (e.target.files.length > 0) {
      setResume(e.target.files[0]);
    }
  };

  const handleSave = () => {
    localStorage.setItem("basicInfo", JSON.stringify(basicInfo));
    localStorage.setItem("education", JSON.stringify(education));
    localStorage.setItem("projects", JSON.stringify(projects));
    localStorage.setItem("skills", JSON.stringify(skills));
    localStorage.setItem("internships", JSON.stringify(internships));
    localStorage.setItem("certifications", JSON.stringify(certifications));
    localStorage.setItem("achievements", JSON.stringify(achievements));
    localStorage.setItem("onlineProfiles", JSON.stringify(onlineProfiles));
    localStorage.setItem("careerObjective", JSON.stringify(careerObjective));
    if (resume) {
      localStorage.setItem("resume", JSON.stringify(resume.name));
    }
    alert("Profile saved successfully!");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="profile-wrapper">
      <div className="profile-card" ref={profileRef}>
        <div className="profile-header">
          <h2>👤 My Profile</h2>
          <p className="profile-subtitle">
            Manage your personal and academic info
          </p>
        </div>

        {/* Basic Info */}
        <details className="profile-section" open>
          <summary>📇 Basic Info</summary>
          <div className="profile-section-content">
            <input
              name="fullName"
              placeholder="Full Name"
              value={basicInfo.fullName}
              onChange={(e) => handleInputChange(e, "basicInfo")}
            />
            <input
              name="email"
              placeholder="Email"
              value={basicInfo.email}
              onChange={(e) => handleInputChange(e, "basicInfo")}
            />
            <input
              name="mobile"
              placeholder="Mobile Number"
              value={basicInfo.mobile}
              onChange={(e) => handleInputChange(e, "basicInfo")}
            />
            <input
              name="location"
              placeholder="Location"
              value={basicInfo.location}
              onChange={(e) => handleInputChange(e, "basicInfo")}
            />

            <input
              name="dob"
              placeholder="Date of Birth"
              value={basicInfo.dob}
              onChange={(e) => handleInputChange(e, "basicInfo")}
            />
            <input
              name="gender"
              placeholder="Gender"
              value={basicInfo.gender}
              onChange={(e) => handleInputChange(e, "basicInfo")}
            />
          </div>
        </details>

        {/* Education Details */}
        <details className="profile-section" open>
          <summary>🎓 Education Details</summary>
          <div className="profile-section-content">
            <input
              name="tenth"
              placeholder="10th Grade Marks (%)"
              value={education.tenth}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <input
              name="twelfth"
              placeholder="12th Grade Marks (%)"
              value={education.twelfth}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <input
              name="degree"
              placeholder="Degree CGPA"
              value={education.degree}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <input
              name="degreeCollege"
              placeholder="College/University Name"
              value={education.degreeCollege}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <input
              name="degreeSpecialization"
              placeholder="Degree Specialization"
              value={education.degreeSpecialization}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <input
              name="degreeYear"
              placeholder="Year of Passing"
              value={education.degreeYear}
              onChange={(e) => handleInputChange(e, "education")}
            />
            <input
              name="degreeCGPA"
              placeholder="Degree CGPA"
              value={education.degreeCGPA}
              onChange={(e) => handleInputChange(e, "education")}
            />
          </div>
        </details>

        {/* Projects */}
        <details className="profile-section" open>
          <summary>💻 Projects</summary>
          <div className="profile-section-content">
            <div className="project-input-wrapper">
              <input
                placeholder="Project title..."
                value={newProject}
                onChange={(e) => setNewProject(e.target.value)}
              />
              <button onClick={() => handleAddItem(newProject, "projects")}>
                ➕ Add
              </button>
            </div>
            <ul className="project-list">
              {projects.map((proj, i) => (
                <li key={i}>
                  🚀 {proj}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      setProjects((prev) =>
                        prev.filter((_, index) => index !== i)
                      )
                    }
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* Skills */}
        <details className="profile-section" open>
          <summary>💻 Technical Skills</summary>
          <div className="profile-section-content">
            <div className="skill-input-wrapper">
              <input
                placeholder="Skill (e.g., JavaScript)"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
              />
              <button onClick={() => handleAddItem(newSkill, "skills")}>
                ➕ Add
              </button>
            </div>
            <ul className="skill-list">
              {skills.map((skill, i) => (
                <li key={i}>
                  ⚙️ {skill}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      setSkills((prev) =>
                        prev.filter((_, index) => index !== i)
                      )
                    }
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* Internships */}
        <details className="profile-section" open>
          <summary>💼 Internships</summary>
          <div className="profile-section-content">
            <div className="internship-input-wrapper">
              <input
                placeholder="Internship title..."
                value={newInternship}
                onChange={(e) => setNewInternship(e.target.value)}
              />
              <button
                onClick={() => handleAddItem(newInternship, "internships")}
              >
                ➕ Add
              </button>
            </div>
            <ul className="internship-list">
              {internships.map((intern, i) => (
                <li key={i}>
                  🏢 {intern}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      setInternships((prev) =>
                        prev.filter((_, index) => index !== i)
                      )
                    }
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* Certifications */}
        <details className="profile-section" open>
          <summary>🏆 Certifications</summary>
          <div className="profile-section-content">
            <div className="certification-input-wrapper">
              <input
                placeholder="Certification name..."
                value={newCertification}
                onChange={(e) => setNewCertification(e.target.value)}
              />
              <button
                onClick={() =>
                  handleAddItem(newCertification, "certifications")
                }
              >
                ➕ Add
              </button>
            </div>
            <ul className="certification-list">
              {certifications.map((cert, i) => (
                <li key={i}>
                  🎓 {cert}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      setCertifications((prev) =>
                        prev.filter((_, index) => index !== i)
                      )
                    }
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* Achievements */}
        <details className="profile-section" open>
          <summary>🧠 Achievements</summary>
          <div className="profile-section-content">
            <div className="achievement-input-wrapper">
              <input
                placeholder="Achievement..."
                value={newAchievement}
                onChange={(e) => setNewAchievement(e.target.value)}
              />
              <button
                onClick={() => handleAddItem(newAchievement, "achievements")}
              >
                ➕ Add
              </button>
            </div>
            <ul className="achievement-list">
              {achievements.map((achievement, i) => (
                <li key={i}>
                  🏆 {achievement}
                  <button
                    className="remove-btn"
                    onClick={() =>
                      setAchievements((prev) =>
                        prev.filter((_, index) => index !== i)
                      )
                    }
                  >
                    ❌
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </details>

        {/* Online Profiles */}
        <details className="profile-section" open>
          <summary>🌐 Online Profiles</summary>
          <div className="profile-section-content">
            <input
              name="github"
              placeholder="GitHub Profile"
              value={onlineProfiles.github}
              onChange={(e) => handleInputChange(e, "onlineProfiles")}
            />
            <input
              name="linkedin"
              placeholder="LinkedIn Profile"
              value={onlineProfiles.linkedin}
              onChange={(e) => handleInputChange(e, "onlineProfiles")}
            />
            <input
              name="leetcode"
              placeholder="LeetCode Profile"
              value={onlineProfiles.leetcode}
              onChange={(e) => handleInputChange(e, "onlineProfiles")}
            />
            <input
              name="portfolio"
              placeholder="Portfolio URL"
              value={onlineProfiles.portfolio}
              onChange={(e) => handleInputChange(e, "onlineProfiles")}
            />
          </div>
        </details>

        {/* Career Objective */}
        <details className="profile-section" open>
          <summary>🚀 Career Objective</summary>
          <div className="profile-section-content">
            <textarea
              value={careerObjective}
              onChange={(e) => handleInputChange(e, "careerObjective")}
              placeholder="Write your career objective"
            />
          </div>
        </details>

        {/* Resume Upload */}
        <details className="profile-section" open>
          <summary>📄 Resume Upload</summary>
          <div className="profile-section-content">
            <input
              type="file"
              onChange={handleResumeUpload}
              accept=".pdf,.doc,.docx"
            />
            {resume && <p>Resume uploaded: {resume.name}</p>}
          </div>
        </details>

        {/* Save and Print buttons */}
        <div className="profile-actions">
          <button onClick={handleSave} className="save-btn">
            💾 Save Profile
          </button>
          <button onClick={handlePrint} className="print-btn">
            🖨️ Print Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
