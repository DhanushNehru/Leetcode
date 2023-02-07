class Solution:
    def sortArrayByParity(self, nums: List[int]) -> List[int]:
        nums.sort(key = lambda n:(n%2, n))
        return nums