x = int(input('.nth of fibonacci: '))


def fib(x):
    arr = [1, 1]

    for y in arr:
        if y < 1:
            pass
        elif 55 < y:
            pass
        else:
            y = arr[-1] + arr[-2]
            arr.append(y)

    return arr[x]


print(fib(x))

