class Solution:
    def removeStars(self, s: str) -> str:
        result = ""
        for char in s:
            if(char == '*'):
                result = result[:-1] # this will remove the last character in a string
            else:
                result+=char

        return result