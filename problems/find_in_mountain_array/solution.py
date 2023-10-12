# """
# This is MountainArray's API interface.
# You should not implement it, or speculate about its implementation
# """
#class MountainArray:
#    def get(self, index: int) -> int:
#    def length(self) -> int:

class Solution:
    def order_agnostic_binary_search(self, arr, target, start, end):
        # Array can be either ascending or descending
        is_asc = arr.get(start) < arr.get(end)

        while start <= end:
            mid = start + (end - start) // 2

            if arr.get(mid) == target:
                return mid

            if is_asc:
                if target < arr.get(mid):
                    end = mid - 1
                else:
                    start = mid + 1
            else:
                if target > arr.get(mid):
                    end = mid - 1
                else:
                    start = mid + 1

        return -1

    def peak_index_in_mountain_array(self, arr):
        start = 0
        end = arr.length() - 1
        while start < end:
            mid = start + (end - start) // 2
            if arr.get(mid) > arr.get(mid + 1):
                # In the slope down of the array
                end = mid
            else:
                start = mid + 1
        return start  # You can also return 'end'

    def findInMountainArray(self, target: int, mountain_arr: 'MountainArray') -> int:
        peak = self.peak_index_in_mountain_array(mountain_arr)
        # First, we search on the left side of the mountain array
        left_search = self.order_agnostic_binary_search(mountain_arr, target, 0, peak)
        # Check if the element was found on the left side
        if left_search != -1:
            return left_search
        # Else, we search on the right side of the mountain array
        return self.order_agnostic_binary_search(mountain_arr, target, peak + 1, mountain_arr.length() - 1)

        