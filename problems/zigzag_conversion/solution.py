class Solution:
    def convert(self, s: str, numRows: int) -> str:
        hash = {}
        numRowsCount = 0
        isIncrement = True

        for i in range(len(s)):
            if numRowsCount in hash:
                hash[numRowsCount].append(s[i])
            else:
                hash[numRowsCount] = [s[i]]

            if numRowsCount == numRows-1:
                isIncrement = False
            if numRowsCount == 0:
                isIncrement = True

            if isIncrement:
                numRowsCount += 1 #pre and postfix operators are not allowed in python
            else:
                numRowsCount -= 1
        # hash = {0: ['P', 'A', 'H', 'N'], 1: ['A', 'P', 'L', 'S', 'I', 'I', 'G'], 2: ['Y', 'I', 'R']}
        result = ""
        for i in list(hash.values()):
            # i = ['P', 'A', 'H', 'N']
            for j in i:
                # j = 'P'
                result+= j
        return result
        # this code concatenates the string into a single string
        # The for i in list(hash.values()) loop iterates over the values of the hash dictionary.
        # The for j in i loop iterates over each character in the current value, which is a list of characters.
        # return "".join([j for i in list(hash.values()) for j in i])