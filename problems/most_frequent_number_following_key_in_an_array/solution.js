/**
 * @param {number[]} nums
 * @param {number} key
 * @return {number}
 */
var mostFrequent = function(nums, key) {
    let map = new Map(), mostFreqNumFollowingKey = 0, frequency = 0;
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] == key){
            const numFollowingKey = nums[i+1]
            if(map.has(numFollowingKey)){
                map.set(numFollowingKey, map.get(numFollowingKey) + 1)
            }
            else{
                map.set(numFollowingKey, 1)
            }

            frequency = Math.max(map.get(numFollowingKey), frequency)
            if(frequency == map.get(numFollowingKey)){
                mostFreqNumFollowingKey = numFollowingKey
            }
        }
    }
    return mostFreqNumFollowingKey;
};