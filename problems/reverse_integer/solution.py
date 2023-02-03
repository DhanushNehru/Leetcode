class Solution:
    def reverse(self, x: int) -> int:
        result = 0
        isNegative = x<0
        absNum = abs(x)

        while absNum>0:
            num = absNum%10
            result = (result*10) + num
            absNum = int(absNum/10) #the return type is float in python so converting to int

        if(result > 2147483648): # Math.pow(2,31) = 2147483648
            return 0
        if isNegative:
            return result*-1

        return result