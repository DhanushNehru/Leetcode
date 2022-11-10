/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let maxSalary=salary[0]
    let minSalary=salary[0]
    let salarySum = 0;
    for(let i=0;i<salary.length;i++){
        if(maxSalary<salary[i]){
            maxSalary= salary[i]
        } 
        if(minSalary>salary[i]){
            minSalary= salary[i]
        }
        salarySum = salarySum + salary[i]
    }
    return ((salarySum - minSalary - maxSalary) / (salary.length - 2)).toFixed(5)
};