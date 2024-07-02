# https://en.wikipedia.org/wiki/Fizz_buzz
for i in range(20):
    div_by_3 = i % 3 == 0
    div_by_5 = i % 5 == 0
    if div_by_3 and div_by_5:
        print("Fizz Buzz")
    elif div_by_3:
        print("Fizz")
    elif div_by_5:
        print("Buzz")
    else:
        print(i)
