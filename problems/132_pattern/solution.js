/**
 * @param {number[]} nums
 * @return {boolean}
 */ 
var find132pattern = function(nums) {
    let stack = [], third = Number.MIN_SAFE_INTEGER;

    // Iterate through the 'nums' array from right to left.
    for (let i = nums.length - 1; i >= 0; i--) {
        // Check if the current element is less than 'third'. If true, return true.
        if (nums[i] < third) return true;

        // While the stack is not empty and the top element of the stack is less than the current element,
        // pop elements from the stack and update 'third' to the popped element.
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            third = stack.pop();
        }

        // Push the current element onto the stack.
        stack.push(nums[i]);
    }

    // If no 132 pattern is found, return false.
    return false;
};
