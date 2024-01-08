# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rangeSumBST(self, root: Optional[TreeNode], low: int, high: int) -> int:

        # Initialize sum as an instance variable
        self.sum = 0

        def dfs(node: Optional[TreeNode]) -> None:
            if(node is None):
                return 

            if low <= node.val <= high:
                self.sum += node.val

            dfs(node.left)
            dfs(node.right)

        # DFS traversal
        dfs(root)

        return self.sum
        

