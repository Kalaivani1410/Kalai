// JobListings.js

import React from 'react';
import { Link } from 'react-router-dom';
import './JobListings.css';

const JobListings = ({ jobData }) => {
  if (!jobData || jobData.length === 0) {
    return <div>No job listings available.</div>;
  }

  return (
    <div className="job-listings">
      <h2>Job Listings</h2>
      <div className="job-cards">
        {jobData.map((job) => (
          <div key={job.id} className="job-card">
            <h3>{job.title}</h3>
            <p><strong>Company:</strong> {job.company}</p>
            <p><strong>Rating:</strong> {job.rating}</p>
            <p><strong>Experience:</strong> {job.experience}</p>
            <p><strong>Salary:</strong> {job.salary}</p>
            <p><strong>Location:</strong> {job.location}</p>
            <p>{job.description}</p>
            <p><strong>Skills:</strong> {job.skills}</p>
            <p>{job.posted}</p>
            <Link to={`/job-details/${job.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListings;
