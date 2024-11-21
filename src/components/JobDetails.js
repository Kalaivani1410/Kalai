// JobDetails.js

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './JobDetails.css'; // Add CSS for styling job details if needed

const JobDetails = ({ jobData }) => {
  const { id } = useParams(); // Retrieve job ID from URL parameter

  // Find the job object based on ID
  const job = jobData.find(job => job.id === parseInt(id));

  if (!job) {
    return <div>Job not found.</div>;
  }

  return (
    <div className="job-details">
      <h2>{job.title}</h2>
      <p>{job.company}</p>
      <p>Rating: {job.rating}</p>
      <p>Experience: {job.experience}</p>
      <p>Salary: {job.salary}</p>
      <p>Location: {job.location}</p>
      <p>{job.description}</p>
      <p>Skills: {job.skills}</p>
      <p>Posted: {job.posted}</p>
      <p>Hiring office located in {job.hiringOffice}</p>

      <div className="apply-buttons">
        <Link to="/signup">
          <button className="register-button">Register to Apply</button>
        </Link>
        <Link to="/Adminlogin">
          <button className="login-button">Login to Apply</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
