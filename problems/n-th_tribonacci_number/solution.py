class Solution:
    def tribonacci(self, n: int) -> int:
        arr = [0, 1, 1]
        try:
            result=arr[n] # if the input is 0,1,2 then this block would execute
            return d
        except:
            for i in range(3,n+1):
                result = arr[0]+arr[1]+arr[2]
                arr[0] = arr[1]
                arr[1] = arr[2]
                arr[2] = result
        return result # return the n'th term


