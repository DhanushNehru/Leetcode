/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
var buildArray = function(target, n) {
    const stack = []
    let current = 1; // The current number to be pushed

    const PUSH = "Push", POP = "Pop"
    for(let i=0;i<target.length;i++){
        while(current < target[i]){
            // While the current number is less than the target number,
            // push the current number and generate the "Push" operation.
            stack.push(PUSH)
            // After pushing, immediately pop
            stack.push(POP)
            current++;
        }
         // The current number matches the target number, so push it.
        stack.push(PUSH);
        current++;
    }
    return stack;
};