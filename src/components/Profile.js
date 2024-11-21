import React, { useState } from 'react';
import './Profile.css';

const Profile = () => {
  const [notes, setNotes] = useState('');
  const [userNotes, setUserNotes] = useState([]);
  const [newNoteError, setNewNoteError] = useState('');

  const userProfile = {
    name: 'John Doe',
    age: 30,
    yearsOfExperience: 8,
    phone: '123-456-7890',
    location: 'New York, USA',
    email: 'john.doe@example.com',
    skills: ['JavaScript', 'React', 'Node.js'],
    education: [
      { degree: 'B.Sc. in Computer Science', institution: 'University of XYZ', year: 2014 },
      { degree: 'M.Sc. in Software Engineering', institution: 'ABC Institute of Technology', year: 2016 },
    ],
    accomplishments: [
      'Developed a successful mobile application with over 100,000 downloads.',
      'Speaker at the International Tech Conference 2022.',
    ],
    certificates: [
      { title: 'Certified JavaScript Developer', issuer: 'XYZ Certification Authority', year: 2018 },
      { title: 'Certified React Developer', issuer: 'ABC Certification Authority', year: 2019 },
    ],
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (notes.trim()) {
      setUserNotes([...userNotes, notes]);
      setNotes('');
      setNewNoteError('');
    } else {
      setNewNoteError('Please enter a note.');
    }
  };

  const handleDownloadResume = () => {
    // Implement resume download functionality here
    alert('Resume download feature coming soon!');
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Age:</strong> {userProfile.age}</p>
        <p><strong>Years of Experience:</strong> {userProfile.yearsOfExperience}</p>
        <p><strong>Phone:</strong> {userProfile.phone}</p>
        <p><strong>Location:</strong> {userProfile.location}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>Skills:</strong> {userProfile.skills.join(', ')}</p>
      </div>
      <div className="profile-section">
        <h3>Education</h3>
        <ul>
          {userProfile.education.map((edu, index) => (
            <li key={index}>{edu.degree} from {edu.institution} ({edu.year})</li>
          ))}
        </ul>
      </div>
      <div className="profile-section">
        <h3>Accomplishments</h3>
        <ul>
          {userProfile.accomplishments.map((accomplishment, index) => (
            <li key={index}>{accomplishment}</li>
          ))}
        </ul>
      </div>
      <div className="profile-section">
        <h3>Certificates</h3>
        <ul>
          {userProfile.certificates.map((certificate, index) => (
            <li key={index}>{certificate.title} issued by {certificate.issuer} ({certificate.year})</li>
          ))}
        </ul>
      </div>
      <div className="profile-notes">
        <h3>Notes</h3>
        <form onSubmit={handleAddNote}>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Add your notes here"
            rows="4"
            className={newNoteError ? 'error' : ''}
          />
          {newNoteError && <p className="error-message">{newNoteError}</p>}
          <button type="submit">Add Note</button>
        </form>
        <ul>
          {userNotes.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleDownloadResume} className="download-resume-button">Download Resume</button>
    </div>
  );
};

export default Profile;
