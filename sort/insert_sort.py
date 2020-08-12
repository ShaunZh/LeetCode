def insert_sort2(collection):
        length = len(collection)
        for i in range(1, length):
            for j in range(i, 0, -1):
                if collection[j] < collection[j - 1]:
                    collection[j], collection[j - 1] = collection[j - 1], collection[j]
        return collection


if __name__ == '__main__':
    from test import *
    test(insert_sort2)
