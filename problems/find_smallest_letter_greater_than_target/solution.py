class Solution:
    def nextGreatestLetter(self, letters: List[str], target: str) -> str:
        start=0 
        end=len(letters)-1
        # ord is used to find the Ascii value
        if ord(target) >= ord(letters[end]) or ord(target) < ord(letters[start]):
            return letters[start]

        while(start<=end):
            mid = start + ( (end-start) // 2 )
            distance = ord(letters[mid]) - ord(target);
            if (distance > 0):
                end = mid - 1;
            else: 
                start = mid + 1

        return letters[start];


         