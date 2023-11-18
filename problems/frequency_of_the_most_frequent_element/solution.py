class Solution:
    def maxFrequency(self, nums: List[int], k: int) -> int:
        # Sort the given array in ascending order
        nums = sorted(nums)
        
        # Initialize variables for the sliding window approach
        start, sum, max_length_frequency = 0, 0, 0

        # Iterate through the sorted array
        for i in range(len(nums)):
            # Add the current element to the sum
            sum += nums[i]
        
            # Check if the sum with the additional k is greater than or equal to
            # the product of the current element and the size of the window
            size_of_the_window = i - start + 1
            if (sum + k) >= (nums[i] * (size_of_the_window)):
                # Update the maximum length frequency
                max_length_frequency = max(max_length_frequency, size_of_the_window)
            else:
                # If the condition is not met, move the window by subtracting
                # the leftmost element and advancing the start pointer
                sum -= nums[start]
                start += 1

        # Return the maximum length frequency found
        return max_length_frequency         
