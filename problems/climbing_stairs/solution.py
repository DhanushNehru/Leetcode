class Solution:
    def climbStairs(self, n: int) -> int:
        # problem is similar to Fibonacci series
        # instead of [0,1,1] we have [0,1,2]
        if(n<=3):
            return n

        arr = [0,1,2]    
        for i in range(3,n+1):
            arr.append(arr[i-1] + arr[i-2])

        return arr[n]