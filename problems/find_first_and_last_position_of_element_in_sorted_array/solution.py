class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        first = -1
        last = -1
        flag = 0
        for i in range(len(nums)):
            if nums[i] == target:
                if first == -1:
                    first = i
                last = i
                
        return [first, last]
        
