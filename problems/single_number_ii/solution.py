from collections import Counter

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        counts = Counter(nums)
        for num, count in counts.items():
            if count == 1:
                return num


    # For single number if 2 duplicates the below logic may work
        # result = 0
        # for num in nums:
        #     result ^= num
        # return result
