var findDiagonalOrder = function(nums) {
    const result = [];

    for (let row = 0; row < nums.length; row++) {
        for (let col = 0; col < nums[row].length; col++) {
            const num = nums[row][col];
            if (!num) continue;
            const current = result[row + col];

            current 
                ? current.unshift(num)
                : result[row + col] = [num];
        }
    }
    return result.flat();
};