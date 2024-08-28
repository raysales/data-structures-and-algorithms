'''
Input: s = "3+2*2+3*15+45/2-3"
Output: 

Solution 1:
    First resolve the multiplication and divistions, then move from left to right and resolve add/sub
    s = "3+4+45+12-3"

    
    we can create an array:
    [3, 4, 45, 12, -3], and them simply sum up the array.0

    The summation can be done by keeping a result value and add and sub

    How to resolve the multiplication and divistions?

    "3 + 122*2 + 3*15 + 45/2 - 3d"
                                ^
    [3, 244, 45 ]
    
    we have to store the previous operator!
    previous_op = -
    "3 + 122*2 + 3*15 + 45/2 - 3"
                  ^
    cur = 3
             
result[3, 122]

'''
class Solution:
    def calculate(self, s: str) -> int:
        stack = []
        cur = 0
        prev_op = "+"
        for c in s+"d":
            if c == " ":
                continue
            elif c.isdigit():
                cur = (cur*10) + int(c)
            else:
                if prev_op == "*":
                    stack.append(stack.pop() * cur)
                if prev_op == "/":
                    stack.append(int(stack.pop() / cur))
                if prev_op == "+":
                    stack.append(cur)
                if prev_op == "-":
                    stack.append(-cur)
                
                cur, prev_op =0, c
        return sum(stack)


        