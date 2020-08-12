def bubble_sort(collection):
    for i in range(len(collection) - 1):
        swapped = False
        for j in range(len(collection) - 1 - i):
            if collection[j] > collection[j + 1]:
                collection[j], collection[j+1] = collection[j+1], collection[j]
                swapped = True

        if not swapped:
            break
    return collection


if __name__ == "__main__":
    from test import *

    test(bubble_sort)







