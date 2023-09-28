class Solution(object):
    def sortArrayByParity(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        # Sort the 'nums' list based on a custom key function using the lambda expression.
        # This key function first groups even and odd numbers (n%2) and then sorts within each group by the actual value (n).
        nums.sort(key = lambda n: (n % 2, n))

        # Return the sorted 'nums' list.
        return nums
        