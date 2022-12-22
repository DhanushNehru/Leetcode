# Write your MySQL query statement below
SELECT MAX(salary) AS SecondHighestSalary FROM Employee WHERE salary NOT IN (SELECT MAX(salary) FROM Employee)
