class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        output = []
        count = 0
        if(len(nums)==0):
            return nums

        starting_number = nums[0]
        #  i+1<len(nums) - to check index out of bound condition
        for i in range(len(nums)):
            if i+1<len(nums) and nums[i+1] == nums[i]+1:
                count=count+1;
            else:
                if count == 0:
                    output.append(str(nums[i]))
                else:
                    output.append(str(starting_number)+"->"+str(nums[i]))
                if i+1<len(nums):
                    starting_number=nums[i+1]
                count = 0
        return output
            
        


