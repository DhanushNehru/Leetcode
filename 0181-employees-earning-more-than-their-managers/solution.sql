# Write your MySQL query statement below
SELECT name AS Employee FROM Employee 
WHERE Employee.salary > ( 
    SELECT Salary FROM Employee AS Employee2 
    WHERE Employee2.id = Employee.managerId
);
