class Solution:
    def numberOfCuts(self, n: int) -> int:
        if n==1:
            return 0
        elif n%2==0:
            # n/2 gives float in python, n//2 returns integer 
            return n//2
        return n