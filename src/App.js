import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';
import JobListings from './components/JobListings';
import JobDetails from './components/JobDetails';
import UploadResume from './components/UploadResume';
import PostJob from './components/PostJob';
import AdminLogin from './components/Adminlogin';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs'; 
import './App.css';
import { useMemo } from 'react';

const App = () => {
  const location = useLocation();
  // Example job data with 25 listings
  const jobData = [
    {
      id: 1,
      title: 'Software & Web Tester',
      company: 'List & Sell Gmbh',
      rating: '4.0',
      experience: '2-6 Yrs',
      salary: '1.5-3.25 Lacs PA',
      location: 'Remote',
      description: 'Hands-on experience in testing web applications. Experience in specific tools and processes...',
      skills: 'Testing Tools, Software Testing, Test Scenarios, Manual Testing, Software Testing Life Cycle, Automation Testing, Test Cases, Interpersonal Skills',
      posted: '12 Days Ago'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      company: 'Tech Solutions Inc.',
      rating: '4.5',
      experience: '3-5 Yrs',
      salary: '2.0-4.0 Lacs PA',
      location: 'Hyderabad',
      description: 'Developing user interfaces for web applications using HTML, CSS, and JavaScript...',
      skills: 'HTML, CSS, JavaScript, React.js, Frontend Development',
      posted: '10 Days Ago'
    },
    {
      id: 3,
      title: 'Backend Engineer',
      company: 'DataHub Systems',
      rating: '3.8',
      experience: '4-8 Yrs',
      salary: '3.0-6.0 Lacs PA',
      location: 'Bangalore',
      description: 'Building and maintaining server-side applications and databases...',
      skills: 'Java, Spring Boot, RESTful APIs, SQL, Backend Development',
      posted: '9 Days Ago'
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      company: 'Creative Designers Ltd.',
      rating: '4.2',
      experience: '2-4 Yrs',
      salary: '1.8-3.5 Lacs PA',
      location: 'Mumbai',
      description: 'Creating intuitive user interfaces and user experiences for digital products...',
      skills: 'UI/UX Design, Adobe XD, Sketch, Prototyping, Wireframing',
      posted: '6 Days Ago'
    },
    {
      id: 5,
      title: 'Data Analyst',
      company: 'Insightful Analytics',
      rating: '3.9',
      experience: '1-3 Yrs',
      salary: '1.2-2.5 Lacs PA',
      location: 'Pune',
      description: 'Analyzing data to extract insights and trends for business decision-making...',
      skills: 'Data Analysis, SQL, Excel, Data Visualization, Statistical Analysis',
      posted: '5 Days Ago'
    },
    {
      id: 6,
      title: 'Full Stack Developer',
      company: 'Tech Masters Inc.',
      rating: '4.6',
      experience: '4-7 Yrs',
      salary: '3.5-7.0 Lacs PA',
      location: 'Remote',
      description: 'Developing both frontend and backend components of web applications using modern technologies...',
      skills: 'JavaScript, React.js, Node.js, Express.js, MongoDB, RESTful APIs, HTML, CSS',
      posted: '4 Days Ago'
    },
    {
      id: 7,
      title: 'Product Manager',
      company: 'Innovative Solutions',
      rating: '4.4',
      experience: '5-10 Yrs',
      salary: '5.0-9.0 Lacs PA',
      location: 'Delhi',
      description: 'Managing product lifecycle from ideation to launch, working closely with development teams...',
      skills: 'Product Management, Agile Methodologies, Stakeholder Management, Roadmapping, UX/UI',
      posted: '3 Days Ago'
    },
    {
      id: 8,
      title: 'Cloud Engineer',
      company: 'CloudTech Solutions',
      rating: '4.1',
      experience: '3-6 Yrs',
      salary: '3.0-5.5 Lacs PA',
      location: 'Chennai',
      description: 'Designing, implementing, and maintaining cloud infrastructure solutions for scalability and reliability...',
      skills: 'AWS, Azure, Google Cloud Platform, DevOps, Infrastructure as Code, Kubernetes',
      posted: '2 Days Ago'
    },
    {
      id: 9,
      title: 'Network Security Analyst',
      company: 'SecureNet Inc.',
      rating: '3.7',
      experience: '3-5 Yrs',
      salary: '2.5-4.5 Lacs PA',
      location: 'Bangalore',
      description: 'Monitoring and securing organizational networks against cyber threats and vulnerabilities...',
      skills: 'Network Security, Firewalls, Intrusion Detection, VPN, SIEM, Incident Response',
      posted: '1 Day Ago'
    },
    {
      id: 10,
      title: 'Digital Marketing Specialist',
      company: 'Digital Edge Marketing',
      rating: '4.3',
      experience: '2-4 Yrs',
      salary: '1.8-3.2 Lacs PA',
      location: 'Hyderabad',
      description: 'Executing digital marketing campaigns across various channels to drive brand awareness and customer acquisition...',
      skills: 'SEO, SEM, Social Media Marketing, Content Marketing, Google Analytics, Email Marketing',
      posted: '18 Hours Ago'
    },
    {
      id: 11,
      title: 'Machine Learning Engineer',
      company: 'AI Innovations',
      rating: '4.8',
      experience: '4-8 Yrs',
      salary: '4.0-8.5 Lacs PA',
      location: 'Pune',
      description: 'Designing and implementing machine learning models and algorithms for predictive analytics...',
      skills: 'Machine Learning, Python, TensorFlow, PyTorch, Data Science, Deep Learning',
      posted: '15 Hours Ago'
    },
    {
      id: 12,
      title: 'Business Analyst',
      company: 'Global Enterprises Ltd.',
      rating: '4.0',
      experience: '3-6 Yrs',
      salary: '3.0-6.0 Lacs PA',
      location: 'Mumbai',
      description: 'Analyzing business processes and requirements to recommend solutions for improvement and efficiency...',
      skills: 'Business Analysis, Requirements Gathering, Process Mapping, Stakeholder Management, Agile',
      posted: '12 Hours Ago'
    },
    {
      id: 13,
      title: 'DevOps Engineer',
      company: 'DevOps Solutions Inc.',
      rating: '4.5',
      experience: '4-7 Yrs',
      salary: '4.0-7.5 Lacs PA',
      location: 'Remote',
      description: 'Implementing continuous integration, deployment, and automation processes using DevOps tools...',
      skills: 'DevOps, CI/CD, Jenkins, Docker, Kubernetes, Infrastructure as Code, AWS, Azure',
      posted: '10 Hours Ago'
    },
    {
      id: 14,
      title: 'Content Writer',
      company: 'Creative Writers Co.',
      rating: '3.6',
      experience: '1-3 Yrs',
      salary: '1.2-2.0 Lacs PA',
      location: 'Chennai',
      description: 'Creating engaging and informative content for websites, blogs, and marketing materials...',
      skills: 'Content Writing, SEO Writing, Copywriting, Editing, Proofreading',
      posted: '8 Hours Ago'
    },
    {
      id: 15,
      title: 'Graphic Designer',
      company: 'Design Studios Ltd.',
      rating: '4.2',
      experience: '2-5 Yrs',
      salary: '1.8-3.5 Lacs PA',
      location: 'Bangalore',
      description: 'Designing visual concepts for websites, advertisements, and marketing campaigns...',
      skills: 'Graphic Design, Adobe Photoshop, Illustrator, InDesign, Branding, Typography',
      posted: '6 Hours Ago'
    },
    {
      id: 16,
      title: 'Sales Manager',
      company: 'Sales Force Inc.',
      rating: '4.4',
      experience: '5-10 Yrs',
      salary: '5.0-9.0 Lacs PA',
      location: 'Delhi',
      description: 'Leading sales teams to achieve revenue targets, developing sales strategies, and managing client relationships...',
      skills: 'Sales Management, Business Development, Team Leadership, Negotiation, CRM',
      posted: '5 Hours Ago'
    },
    {
      id: 17,
      title: 'HR Specialist',
      company: 'HR Solutions Ltd.',
      rating: '3.9',
      experience: '3-6 Yrs',
      salary: '2.5-4.5 Lacs PA',
      location: 'Chennai',
      description: 'Managing human resources functions including recruitment, employee relations, and HR policies...',
      skills: 'HR Management, Recruitment, Employee Relations, HR Policies, Performance Management',
      posted: '4 Hours Ago'
    },
    {
      id: 18,
      title: 'Business Development Manager',
      company: 'Growth Solutions Inc.',
      rating: '4.3',
      experience: '4-8 Yrs',
      salary: '4.0-7.5 Lacs PA',
      location: 'Bangalore',
      description: 'Identifying new business opportunities, developing client relationships, and negotiating contracts...',
      skills: 'Business Development, Sales, Client Relationship Management, Negotiation, Lead Generation',
      posted: '3 Hours Ago'
    },
    {
      id: 19,
      title: 'Financial Analyst',
      company: 'Finance Experts Ltd.',
      rating: '3.8',
      experience: '2-5 Yrs',
      salary: '2.0-4.0 Lacs PA',
      location: 'Mumbai',
      description: 'Analyzing financial data, preparing reports, and providing insights to support financial planning...',
      skills: 'Financial Analysis, Budgeting, Forecasting, Financial Modelling, Excel, Data Analysis',
      posted: '2 Hours Ago'
    },
    {
      id: 20,
      title: 'Customer Support Specialist',
      company: 'Supportive Services Inc.',
      rating: '3.7',
      experience: '1-3 Yrs',
      salary: '1.5-2.5 Lacs PA',
      location: 'Pune',
      description: 'Resolving customer inquiries and issues via phone, email, or chat, ensuring high customer satisfaction...',
      skills: 'Customer Service, Communication Skills, Problem-Solving, Ticketing Systems',
      posted: '1 Hour Ago'
    },
    {
      id: 21,
      title: 'AI/ML Researcher',
      company: 'Future AI Labs',
      rating: '4.7',
      experience: '3-7 Yrs',
      salary: '3.5-6.5 Lacs PA',
      location: 'Remote',
      description: 'Conducting research in artificial intelligence and machine learning, experimenting with new algorithms...',
      skills: 'AI, Machine Learning, Research, Python, TensorFlow, Natural Language Processing',
      posted: '59 Minutes Ago'
    },
    {
      id: 22,
      title: 'Technical Writer',
      company: 'TechDocs Inc.',
      rating: '4.0',
      experience: '2-4 Yrs',
      salary: '1.8-3.0 Lacs PA',
      location: 'Hyderabad',
      description: 'Creating technical documentation for software products, user manuals, and API documentation...',
      skills: 'Technical Writing, Documentation, Content Creation, Editing, Software Documentation',
      posted: '50 Minutes Ago'
    },
    {
      id: 23,
      title: 'UI/UX Architect',
      company: 'UserX Design Studios',
      rating: '4.6',
      experience: '5-10 Yrs',
      salary: '5.0-9.5 Lacs PA',
      location: 'Bangalore',
      description: 'Designing the overall user experience and information architecture for digital products...',
      skills: 'UI/UX Design, Wireframing, Prototyping, User Research, Information Architecture',
      posted: '45 Minutes Ago'
    },
    {
      id: 24,
      title: 'Quality Assurance Manager',
      company: 'QA Excellence Ltd.',
      rating: '4.2',
      experience: '6-10 Yrs',
      salary: '6.0-10.0 Lacs PA',
      location: 'Delhi',
      description: 'Leading the quality assurance team, ensuring adherence to quality standards and process improvement...',
      skills: 'Quality Assurance, QA Management, Testing Methodologies, Process Improvement, Team Leadership',
      posted: '40 Minutes Ago'
    },
    {
      id: 25,
      title: 'Blockchain Developer',
      company: 'CryptoTech Solutions',
      rating: '4.5',
      experience: '3-7 Yrs',
      salary: '3.5-6.5 Lacs PA',
      location: 'Chennai',
      description: 'Developing blockchain applications, implementing smart contracts, and maintaining blockchain networks...',
      skills: 'Blockchain Development, Ethereum, Solidity, Smart Contracts, Cryptography',
      posted: '35 Minutes Ago'
    }
  ];
  const showNavbar = useMemo(() => location.pathname !== '/PostJob', [location.pathname]);

  return (
    <div className="App">
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/jobs" element={<JobListings jobData={jobData} />} />
        <Route path="/job-details/:id" element={<JobDetails jobData={jobData} />} />
        <Route path="/upload-resume" element={<UploadResume />} />
        <Route path="/postJob" element={<PostJob />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact-us" element={<ContactUs />} />
        {/* <Route path="/admin-login" element={<AdminLogin />} /> */}
        <Route path="/post-job" component={PostJob} />
      </Routes>
    </div>
  );
};

export default App;