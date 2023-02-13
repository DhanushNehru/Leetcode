class Solution:
    def countOdds(self, low: int, high: int) -> int:
        diff = high - low
        if diff == 1:
            return high//low
        elif low % 2 == 1 or high % 2 == 1:
            return (diff // 2) + 1
        else:
            return diff // 2