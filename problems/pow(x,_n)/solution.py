class Solution:
    def myPow(self, x: float, n: int) -> float:
        if n==0:
            return 1
        elif(n>0):
            pow = n
        else:
            pow = n * -1
        
        if pow%2 == 0:
            result = self.myPow(x*x,pow/2)
        else:
            result = self.myPow(x*x,(pow-1)/2) * x
        
        if n>0:
            return result
        else:
            return 1/result