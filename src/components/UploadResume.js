import React, { useState } from 'react';
import './UploadResume.css';

const UploadResume = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(''); // New phone number state
  const [gender, setGender] = useState('male'); // Defaulting to male
  const [studentType, setStudentType] = useState('Full-Time'); // Defaulting to Full-Time
  const [position, setPosition] = useState('');
  const [salaryRequirements, setSalaryRequirements] = useState('');
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(''); // State to store the file name
  const [error, setError] = useState('');

  const handleSend = () => {
    if (!fullName || !email || !phoneNumber || !file || !position || !salaryRequirements) {
      setError('All fields are required');
      return;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setError('Invalid email address');
      return;
    }
    setError('');
    // Simulate file upload logic - you would implement actual upload logic here
    setTimeout(() => {
      alert('Resume sent successfully!');
      setFullName('');
      setEmail('');
      setPhoneNumber('');
      setGender('male');
      setStudentType('Full-Time');
      setPosition('');
      setSalaryRequirements('');
      setFile(null);
      setFileName('');
    }, 1000); // Simulating delay for file upload
  };

  const handleCancel = () => {
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setGender('male');
    setStudentType('Full-Time');
    setPosition('');
    setSalaryRequirements('');
    setFile(null);
    setFileName('');
    setError('');
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileName(selectedFile.name); // Set the file name
  };

  return (
    <div className="upload-resume">
      <h2>Upload Resume</h2>
      {error && <p className="error">{error}</p>}
      <div className="form-group">
        <label>Full Name:</label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Phone Number:</label> {/* New phone number field */}
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Gender:</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label>Student Type:</label>
        <select
          value={studentType}
          onChange={(e) => setStudentType(e.target.value)}
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Internship">Internship</option>
          <option value="Contract">Contract</option>
        </select>
      </div>
      <div className="form-group">
        <label>Position Applying For:</label>
        <input
          type="text"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Salary Requirements:</label>
        <input
          type="text"
          value={salaryRequirements}
          onChange={(e) => setSalaryRequirements(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Choose File:</label>
        <div className="file-input">
          <input
            type="file"
            onChange={handleFileChange}
          />
          <div className="selected-file">{fileName}</div> {/* Display selected file name */}
        </div>
      </div>
      <div className="form-buttons">
        <button onClick={handleSend}>Send</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default UploadResume;
