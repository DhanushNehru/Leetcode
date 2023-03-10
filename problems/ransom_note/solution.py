class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        for char in ransomNote:
            index = magazine.find(char)
            if(index == -1):
                return False
            else:
                magazine = magazine[:index] + magazine[index+1:] # removes the specific index character from the string
        return True