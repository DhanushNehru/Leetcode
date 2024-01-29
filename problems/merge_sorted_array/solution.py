class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        j=0
        while m < len(nums1):
            nums1[m] = nums2[j]
            m+=1
            j+=1

        nums1.sort()