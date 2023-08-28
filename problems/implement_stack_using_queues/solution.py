class MyStack:

    def __init__(self):
        self.array = []
        

    def push(self, x: int) -> None:
        self.array.append(x)

    def pop(self) -> int:
        return self.array.pop()

    def top(self) -> int:
        if(len(self.array)>0):
            return self.array[len(self.array)-1]


    def empty(self) -> bool:
        if(len(self.array)==0):
            return True
        return False


# Your MyStack object will be instantiated and called as such:
# obj = MyStack()
# obj.push(x)
# param_2 = obj.pop()
# param_3 = obj.top()
# param_4 = obj.empty()