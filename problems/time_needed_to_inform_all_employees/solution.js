/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    manager.forEach((_, index) => timeFromEmployeeToHead(index))

    return Math.max(...informTime);
    
    function timeFromEmployeeToHead(id) {
        if (manager[id] !== -1) {
            informTime[id] += timeFromEmployeeToHead(manager[id]);
            manager[id] = -1
        }
        return informTime[id];
    }
};