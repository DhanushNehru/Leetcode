class Solution:
    def maxScore(self, s: str) -> int:
        # Initialize counters for '0's on the left and '1's on the right
        left = 0
        right = s.count('1')

        maxScore = 0
        
        # Exclude the last character to avoid unnecessary calculations
        for char in s[:-1]: # Eg) s = "00"
            if char == '0':
                left += 1
            else:
                right -= 1
            # Update the maximum score with the current sum of left and right counters
            maxScore = max(maxScore, left + right)
        
        return maxScore 