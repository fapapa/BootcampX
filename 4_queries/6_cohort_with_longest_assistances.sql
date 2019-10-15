SELECT cohorts.name, AVG(completed_at - started_at)
       FROM cohorts
       JOIN students
            ON cohorts.id = students.cohort_id
       JOIN assistance_requests
            ON students.id = assistance_requests.student_id
       GROUP BY cohorts.name
       ORDER BY AVG(completed_at - started_at) DESC
       LIMIT 1;
