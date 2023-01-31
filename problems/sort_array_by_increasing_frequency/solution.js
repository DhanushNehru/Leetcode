/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i], map.get(nums[i]) + 1)
        }
        else{
            map.set(nums[i], 1)
        }
    }
    const mapArray = Array.from(map).sort((a,b)=> a[1]==b[1] ? b[0]-a[0] : a[1]-b[1])
    // if multiple values have the same frequency we sort them in decreasing order
    const result = []
    // mapArray => [number, frequency]
    for(element of mapArray){
        const minArr = []
        minArr.length = element[1];
        // based on the number and frequency we get the final result
        result.push( ...minArr.fill(element[0]) );
    }
    return result;
};