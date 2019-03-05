x = int(input('.nth of fibonacci: '))
z = int(input('golden ratio of .nth fibonacci: '))


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


def gr(z):
    arr = [1, 1]

    for t in arr:
        if t < 1:
            pass
        elif 55 < t:
            pass
        else:
            t = arr[-1] + arr[-2]
            arr.append(t)

    golden_ratio = arr[-2] / arr[-1]

    return golden_ratio


print(fib(x))
print(gr(z))

