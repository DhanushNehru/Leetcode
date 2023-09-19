class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        hash = {}
        for num in nums:
            if(num in hash):
                return num
            else:
                hash[num]= True