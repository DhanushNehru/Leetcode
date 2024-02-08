import math

class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        times =  (len(nums) // 2) + 1
        hash = {}
        for num in nums:
            if num in hash:
                hash[num] += 1
            else:
                hash[num] = 1
            if hash[num] == times:
                return num
