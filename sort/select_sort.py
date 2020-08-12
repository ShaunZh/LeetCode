def select_sort(collection):
    length = len(collection)
    if length <= 1:
        return collection
    else:
        for i in range(length):
            minIndex = i
            for j in range(i + 1, length - i):
                if collection[j] < collection[minIndex]:
                    minIndex = j

            collection[i], collection[minIndex] = collection[minIndex], collection[i]
    return collection


if __name__ == "__main__":

    from test import *

    test(select_sort)

