/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let currentTank = 0, totalTank = 0, position = 0;
    for(let i=0;i<gas.length;i++){
        currentTank = currentTank + gas[i] - cost[i]
        //When total tank is positive, it means we have enough gas to over all the previous path.
        totalTank = totalTank+ gas[i] - cost[i];
        if (currentTank<0) {
            currentTank = 0;
            position = i+1;
        }
    }
    return totalTank<0?-1:position;
};