SELECT assignments.id, assignments.name, day, chapter, COUNT(assistance_requests.*) AS total_assistances
       FROM assignments
       JOIN assistance_requests
            ON assignments.id = assignment_id
       GROUP BY assignments.id
       ORDER BY COUNT(assistance_requests.*) DESC
