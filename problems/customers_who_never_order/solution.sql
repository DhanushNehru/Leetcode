# Write your MySQL query statement below
SELECT Table1.name AS Customers FROM CUSTOMERS Table1 where Table1.id NOT IN (SELECT Table2.customerId FROM Orders Table2) 