/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    const mod = Math.pow(10,9) + 7
    const stack = [];
    let sum = 0;

    for (let i = 0; i <= arr.length; i++) {
        // Process the remaining elements in the stack when reaching the end of the array
        // or when the current element is smaller than the element at the top of the stack.
        while (stack.length > 0 && (i === arr.length || arr[i] < arr[stack[stack.length - 1]])) {
            const poppedIndex = stack.pop();
            // Get the index of the previous element in the stack.
            const minValue = arr[poppedIndex];
            const prevIndex = stack.length > 0 ? stack[stack.length - 1] : -1;

            // Calculate the contribution of the popped element to the sum
            sum = (sum + minValue * (i - poppedIndex) * (poppedIndex - prevIndex)) % mod;
        }

        // Push the current index onto the stack
        stack.push(i);
    }

    return sum;
};