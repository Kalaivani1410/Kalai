import express from 'express';
import mysql from 'mysql2/promise';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
const app = express();
const port = 5000;
app.use(session({
  secret: 'kalai',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // Note: For production, set secure: true
}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create a connection pool to the database
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mydb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

//ADMIN ID CREATION
// const initializeAdminUser = async () => {
//   const username = 'kalai';
//   const password = 'kalai14';

//   const sql = 'INSERT INTO admins (username, password) VALUES (?, ?)';
//   const values = [username, password];

//   try {
//     const connection = await pool.getConnection();
//     await connection.query(sql, values);
//     connection.release();
//     console.log('Admin user created');
//   } catch (err) {
//     console.error('Error creating admin user:', err);
//   }
// };
//initializeAdminUser();

//Admin login 
app.post('/admin/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const [rows] = await pool.execute('SELECT * FROM admins WHERE username = ? AND password = ?', [username, password]);
    if (rows.length > 0) {
      const admin = rows[0];
      req.session.adminId = admin.id;
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error('Error during admin login:', error);
    res.status(500).json({ message: 'Failed to login.' });
  }
});
//   const sql = 'SELECT * FROM admins WHERE username = ?';
//   const values = [username];

//   try {
//     const connection = await pool.getConnection();
//     const [rows] = await connection.query(sql, values);
//     connection.release();

//     if (rows.length > 0) {
//       const admin = rows[0];

//       const isPasswordCorrect = await compare(password, admin.password);
//       if (isPasswordCorrect) {
//         res.status(200).send('Login successful');
//       } else {
//         res.status(401).send('Invalid credentials');
//       }
//     } else {
//       res.status(401).send('Invalid credentials');
//     }
//   } catch (error) {
//     console.error('Error during admin login:', error);
//     res.status(500).send('An error occurred during login');
//   }
// });

// Handle signup route
app.post('/signup', async (req, res) => {
  const { firstName, middleName, lastName, email, password, securityQuestion, answer } = req.body;

  // Hash the password before storing it in the database
 // const hashedPassword = await bcrypt.hash(password, 10);

  const sql = 'INSERT INTO users (firstName, middleName, lastName, email, password, securityQuestion, answer) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [firstName, middleName, lastName, email, password, securityQuestion, answer];

  try {
    const connection = await pool.getConnection();
    await connection.query(sql, values);
    connection.release();
    res.status(200).send('User registered successfully');
  } catch (err) {
    console.error('Error during signup:', err);
    res.status(500).send('Failed to register user');
  }
});

//post job component
app.post('/postjob', async (req, res) => {
  console.log('Received a request to /postjob');
  const { jobTitle, jobLocation, numberOfOpenings, companyName, jobDescription } = req.body;
  const sql = `INSERT INTO jobs (job_title, job_location, number_of_openings, company_name, job_description) 
               VALUES (?, ?, ?, ?, ?)`;
  const values = [jobTitle, jobLocation, numberOfOpenings, companyName, jobDescription];

  try {
    const connection = await pool.getConnection();
    await connection.query(sql, values);
    connection.release();
    res.status(200).send('Job posted successfully');
  } catch (error) {
    console.error('Error posting job:', error);
    res.status(500).send('Failed to post job');
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
