class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        result = sorted(nums1 + nums2)
        resultLength = len(result) 
        index = resultLength // 2
        if resultLength % 2 == 1:
            return result[index]
        else:
            return (result[index-1]+result[index]) / 2