class Solution:
    def addBinary(self, a: str, b: str) -> str:
         # the first part 
         # a = 11 , b = 1 , output = "0b100"
         # to print result after 2 characters, "0b" we use [2:]
         return bin(int(a,2) + int(b,2))[2:]