class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        slen = len(s)
        tlen = len(t)

        # Check if s is empty; an empty string is always a subsequence
        if slen == 0:
            return True

        # s can't be a subsequence of t if its length is greater than t's length
        if slen > tlen:
            return False
        
        subsequenceCount = 0

        for char in t:
            # we need to check the first condition to avoid index out of range
            if subsequenceCount < slen and char == s[subsequenceCount]:
                subsequenceCount += 1

        # if subsequence count matches the s length we return true
        return subsequenceCount == slen
