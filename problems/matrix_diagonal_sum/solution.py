class Solution:
    def diagonalSum(self, mat: List[List[int]]) -> int:
        sum = 0
        matLength = len(mat)
        for i in range(matLength):
            sum += mat[i][i]
            if matLength-i-1 != i:
                sum+=mat[i][matLength-i-1]
        return sum