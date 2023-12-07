class Solution:
    def largestOddNumber(self, num: str) -> str:
        num_len = len(num)
        for i in range(num_len):
            # The logic here is to iterate from the last
            if(int(num[num_len - i -1]) % 2 == 1):
                # If odd, return the substring from the beginning to the current position
                return num[0:num_len - i]
        # If no odd digit is found, return an empty string
        return ""