const cohortName = process.argv[2] || 'JUL02';

const queryString = `
SELECT DISTINCT teachers.name AS teacher, cohorts.name AS cohort
       FROM teachers
       JOIN assistance_requests
            ON teachers.id = assistance_requests.teacher_id
       JOIN students
            ON student_id = students.id
       JOIN cohorts
            ON cohort_id = cohorts.id
       WHERE cohorts.name LIKE $1
       ORDER BY teachers.name
`;

const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(queryString, [cohortName])
  .then(res => {
    console.log('connected');
    res.rows.forEach(assistance => {
      console.log(`${assistance.cohort}: ${assistance.teacher}`);
    });
  })
  .catch(err => console.error('query error', err.stack));
