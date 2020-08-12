
# 归并排序-分治算法：先将大问题分成一个个小问题递归求解(分的过程)，然后将小问题整合在一起(治的过程)


def merge_sort(collection):
    def merge(left, right):
        result = []
        while left and right:
            result.append((left if left[0] <= right[0] else right).pop(0))

        return result + left + right

    length = len(collection)
    if length <= 1:
        return collection
    mid = length // 2

    merged = merge(merge_sort(collection[:mid]), merge_sort(collection[mid:]))
    return merged


if __name__ == "__main__":

    from test import *
    test(merge_sort)
