class Solution:
    def isValid(self, s: str) -> bool:
        hash = {
            "{":"}",
            "(":")",
            "[":"]"
        }
        stack = []
        for char in s:
            if char in hash:
                stack.append(hash[char])
            elif(not stack or char != stack.pop()):
                return False

        return len(stack) == 0
