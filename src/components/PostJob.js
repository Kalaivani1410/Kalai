import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostJob.css';

const PostJob = () => {
  const [jobTitle, setJobTitle] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [numberOfOpenings, setNumberOfOpenings] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [isPosted, setIsPosted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('http://localhost:5000/postjob', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jobTitle, jobLocation, numberOfOpenings, companyName, jobDescription }),
      });

      if (response.ok) {
        console.log('Job posted successfully');
        setIsPosted(true);

        // Clear form fields
        setJobTitle('');
        setJobLocation('');
        setNumberOfOpenings('');
        setCompanyName('');
        setJobDescription('');

        // Hide success message after 3 seconds
        setTimeout(() => setIsPosted(false), 3000);
      } else {
        console.log('Failed to post job');
        setError('Failed to post job');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-job">
      <div className="btns">
        <button className="logout_btn" onClick={handleLogout}>Logout</button>
        {/* <button className="xls_btn" onClick={downloadAsExcel}>Download as Excel</button> */}
      </div>
      <h2>Post a Job</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="jobTitle">Job Title *</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter the Job Title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobLocation">Job Location *</label>
          <select
            id="jobLocation"
            value={jobLocation}
            onChange={(e) => setJobLocation(e.target.value)}
            required
          >
            <option value="">Pick Your City</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Bangalore">Bangalore</option>
            <option value="Delhi">Delhi</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Chennai">Chennai</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="numberOfOpenings">No. of Openings *</label>
          <input
            type="text"
            id="numberOfOpenings"
            value={numberOfOpenings}
            onChange={(e) => setNumberOfOpenings(e.target.value)}
            placeholder="Eg. 2"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="companyName">Company Name *</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter the Company Name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description *</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter the Job Description"
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Post Job'}
        </button>
      </form>
      {isPosted && (
        <div className="success-message">Your job has been posted successfully!</div>
      )}
      {error && (
        <div className="error-message">{error}</div>
      )}
    </div>
  );
};

export default PostJob;
