class Solution:
    def average(self, salary: List[int]) -> float:
        max_salary = max(salary)
        min_salary = min(salary)
        sum_salary = sum(salary)
        return ((sum_salary - min_salary - max_salary) / ( len(salary) - 2 ))