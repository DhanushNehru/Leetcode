/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let hash = {}
    for(let i=0;i<tasks.length;i++){
        hash[tasks[i]] = (hash[tasks[i]] == undefined) ? 1: hash[tasks[i]] += 1
    }
    const taskCount = Object.values(hash)
    let res = 0;
    for(let i=0;i<taskCount.length;i++){
            if(taskCount[i] < 2){
                return -1;
            }   
            let temp = parseInt(taskCount[i] / 3) + (taskCount[i] % 3 !== 0 ? 1 : 0);
            res += temp;    
    }
    return res;
};