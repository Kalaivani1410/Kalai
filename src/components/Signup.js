import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [errors, setErrors] = useState({});
  const [isSignedUp, setIsSignedUp] = useState(false);

  const navigate = useNavigate();
  const validate = () => {
    const errors = {};

    if (!firstName.trim()) {
      errors.firstName = 'First Name is required';
    }
    if (!lastName.trim()) {
      errors.lastName = 'Last Name is required';
    }
    if (!email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }
    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    if (!securityQuestion.trim()) {
      errors.securityQuestion = 'Security Question is required';
    }
    if (!answer.trim()) {
      errors.answer = 'Answer is required';
    }

    return errors;
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ firstName, middleName, lastName, email, password, securityQuestion, answer }),
        });

        if (response.ok) {
          console.log('Signup successful');
          setIsSignedUp(true);
        } else {
          console.log('Signup failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    } else {
      setErrors(validationErrors);
    }
  };

  const handleClosePopup = () => {
    setIsSignedUp(false);
    navigate('/Home');
    // Perform any additional actions like redirecting the user, etc.
  };

  return (
    <div className="signup-container">
      <h2>Candidate Registration</h2>
      <p>Please Register and fill in the online application form</p>
      <p>* = Mandatory field</p>
      <form onSubmit={handleSignup}>
        <div className="form-group">
          <label htmlFor="firstName">Candidate's First Name<span>*</span></label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="middleName">Middle Name</label>
          <input
            type="text"
            id="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name<span>*</span></label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email (Username)<span>*</span></label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password<span>*</span></label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password<span>*</span></label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="securityQuestion">Security Question<span>*</span></label>
          <select
            id="securityQuestion"
            value={securityQuestion}
            onChange={(e) => setSecurityQuestion(e.target.value)}
            required
          >
            <option value="">Select Question</option>
            <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
            <option value="What city were you born in?">What city were you born in?</option>
            <option value="What is your favorite movie?">What is your favorite movie?</option>
          </select>
          {errors.securityQuestion && <p className="error">{errors.securityQuestion}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="answer">Answer<span>*</span></label>
          <input
            type="text"
            id="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            required
          />
          {errors.answer && <p className="error">{errors.answer}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="signup-links">
        <Link to="/login">Already have an account? Log in</Link>
      </div>
      {isSignedUp && (
        <div className="popup">
          <div className="popup-content">
            <h3>Signup Successful</h3>
            <p>Welcome, {firstName} {lastName}! Your account has been created successfully.</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
