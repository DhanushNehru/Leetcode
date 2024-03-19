class Solution:
    def firstUniqChar(self, s: str) -> int:
        strLen = len(s)
        for i in range(0,strLen):
            charRemovedStr = s[0:i] + s[i+1: strLen]
            if(s[i] not in charRemovedStr):
                return i
        return -1

