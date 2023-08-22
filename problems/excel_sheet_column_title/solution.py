class Solution:
    def convertToTitle(self, columnNumber: int) -> str:
        result = ""
        while columnNumber>0:
            if columnNumber%26 == 0:
                digit = 26 # If the remainder is 0, it means the current digit should be 'Z'
            else:
                digit = columnNumber%26  # Calculate the digit based on the remainder
            # Convert the digit to the corresponding uppercase letter using Unicode code points,
            # and prepend it to the result string
            result = chr(64 + digit) + result
            # Update columnNumber to remove the processed digit and adjust for the next iteration
            columnNumber = (columnNumber-digit)//26
        return result

    