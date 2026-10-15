def fac(n):
    def fact(n):
        if n==1:
            return 1
        return n*fact(n-1)
    return fact(n)

print(fac(5))