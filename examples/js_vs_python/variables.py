a = "hi"
b = 2
c = 2.0

b + c
# 4.0

b = a  # Overwrite b
d = " hello"
b + d
# "hi hello"

c + d
# TypeError: unsupported operand type(s) for +: 'int' and 'str'
