class Solution:
    def reverseWords(self, s: str) -> str:
        splitStr = s.split(" ")
        # Use the map function with a lambda function to reverse each word in 'splitStr'.
        reverseWords = map(lambda x: x[::-1], splitStr)
        return " ".join(reverseWords)
        