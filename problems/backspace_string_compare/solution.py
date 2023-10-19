class Solution:
    def backspaceCompare(self, s: str, t: str) -> bool:
        
        def are_stacks_equal(stack1, stack2):
            # Check if the sizes of the stacks are equal
            if len(stack1) != len(stack2):
                return False
    
            # Compare elements of the stacks one by one
            while stack1 and stack2:
                if stack1.pop() != stack2.pop():
                    return False

            # If both stacks are empty at this point, they are equal
            return not stack1 and not stack2

        stackS = []
        stackT = []
        i=0
        while i<len(s):
            if s[i]=="#":
                if stackS:
                    stackS.pop()
            else:
                stackS.append(s[i])
            i+=1
        
        i=0
        while i<len(t):
            if t[i]=="#":
                if stackT:
                    stackT.pop()
            else:
                stackT.append(t[i])
            i+=1
        
        return are_stacks_equal(stackS, stackT)