# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        # preorder - root, left, right
        def preorder(root) -> str:
            if root is None:
                return ""

            val = root.val
            left = preorder(root.left)
            right = preorder(root.right)

            # if both left and right is empty
            if left is "" and right is "":
                return f'{val}'
            # if right is empty, keep the left
            if right is "":
                return f'{val}({left})'
            # if left and right are not empty
            return f'{val}({left})({right})'

        return preorder(root)
    
# Input: root = [1,2,3,null,4]
# Output: "1(2()(4))(3)"

# As per this example if the left is null, we need to include () 
# empty parenthesis so , if left is "" condition is not checked