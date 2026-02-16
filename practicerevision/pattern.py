def pattern(n):
    secondLast = 0
    last = 1
    for i in range(n):
        print(secondLast)
        ans = secondLast + last
        secondLast = last
        last = ans

pattern(2)

