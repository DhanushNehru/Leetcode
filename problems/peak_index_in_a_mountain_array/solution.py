import math

class Solution:
    def peakIndexInMountainArray(self, arr: List[int]) -> int:
        start = 0; end = len(arr)-1; mid = start + math.floor((end-start)/2)
        while(start<=end):
            if arr[mid]>arr[mid-1] and arr[mid]>arr[mid+1]:
                return mid
            elif arr[mid]<arr[mid+1]:
                start = mid + 1
            else:
                end = mid - 1
            mid = start + math.floor((end-start)/2)
