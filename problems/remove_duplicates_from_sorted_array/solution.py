class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        uniqueNums = list(set(nums))
        uniqueNums.sort()
        nums.clear()
        nums.extend(uniqueNums)
        return len(nums)