# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        # inorder - left , root, right

        result = []
        if root is None:
            return result
        else:
            # Perform inorder traversal on the left subtree and append the result
            result+=self.inorderTraversal(root.left)
            # Append the value of the current root to the result list
            result.append(root.val)
            # Perform inorder traversal on the right subtree and append the result
            result+=self.inorderTraversal(root.right)
        
        return result

# Notes
# result+=self.inorderTraversal(root.left)
# array1 = [1, 2, 3]
# array2 = [4, 5, 6]
# combined_array = array1 + array2
# print(combined_array)
# [1, 2, 3, 4, 5, 6]
# Since it is an array we use +
        