
def quick_sort1(collection):
    def partition(unsort, lo, hi):
        # 此处是使用第一个元素作为切分元素
        pivot = unsort[lo]
        while lo < hi:
            while lo < hi and unsort[hi] > pivot:
                hi = hi - 1
            unsort[lo] = unsort[hi]
            while lo < hi and unsort[lo] < pivot:
                lo = lo + 1
            unsort[hi] = unsort[lo]
        unsort[lo] = pivot
        return lo

    def sort(unsort, lo, hi):
        if lo < hi:
            mid = partition(unsort, lo, hi)
            sort(unsort, lo, mid - 1)
            sort(unsort, mid + 1, hi)

    sort(collection, 0, len(collection) - 1)
    return collection


class QuickSort:
    # CutOff一般选择5 ~ 15
    CutOff = 8

    # 快速排序-方法二：
    # 1. 切分元素的选择-选定三个元素，分别是数组中最低位置元素，中间位置元素和最后位置的元素，取处于中间大小的元素作为切分元素
    # 假如三个元素分别为：-4， 4，-3，那么切分元素就是-3，因为 -4 < -3 < 4
    # 2. 如果数组长度小于CutOff，那么使用插入排序，对于小数组，插入排序要快于快速排序
    @classmethod
    def sort(cls, collection):
        cls.sort_inner(collection, 0, len(collection) - 1)
        return collection

    @classmethod
    def sort_inner(cls, collection, lo, hi):
        n = hi - lo + 1
        if n <= cls.CutOff:
            cls.insert_sort(collection, lo, hi)
            return

        m = cls.median3(collection, lo, hi - lo // 2, hi)
        cls.exch(collection, lo, m)

        j = cls.partition(collection, lo, hi)
        cls.sort_inner(collection, lo, j - 1)
        cls.sort_inner(collection, j + 1, hi)

    # 快速排序-方法三：将整个数组分为三个数组：小于切分元素的数组，等于切分元素的数组，大于切分元素的数组
    @classmethod
    def sort_3bars(cls, collection):
        cls.sort_3bars_inner(collection, 0, len(collection) - 1)
        return collection

    @classmethod
    def sort_3bars_inner(cls, collection, lo, hi):
        if lo >= hi:
            return
        lt = lo
        gt = hi
        v = collection[lo]
        i = lo + 1
        while i <= gt:
            c = cls.compared(collection[i], v)
            if c < 0:
                cls.exch(collection, i, lt)
                lt += 1
                i += 1
            elif c > 0:
                cls.exch(collection, i, gt)
                gt -= 1
            else:
                i += 1
        cls.sort_3bars_inner(collection, lo, lt - 1)
        cls.sort_3bars_inner(collection, gt + 1, hi)

    @staticmethod
    def compared(a, b):
        return a - b

    @staticmethod
    def partition(collection, lo, hi):
        pivot = collection[lo]
        while lo < hi:
            # 必须先从高位向低位遍历: 低位 ← 高位，因为我们选定的切分元素在lo位置，而lo位置的值已经保存在pivot中
            while lo < hi and collection[hi] >= pivot:
                hi -= 1
            collection[lo] = collection[hi]
            # 低位 → 高位
            while lo < hi and collection[lo] <= pivot:
                lo += 1
            collection[hi] = collection[lo]

        collection[lo] = pivot
        return lo

    @staticmethod
    def median3(collection, a, b, c):
        if collection[a] < collection[b]:
            if collection[a] < collection[c]:
                return a
            else:
                return c
        else:
            if collection[b] > collection[c]:
                return c
            else:
                return b

    @staticmethod
    def insert_sort(collection, lo, hi):
        for i in range(lo, hi + 1):
            for j in range(i, lo, -1):
                if collection[j] < collection[j - 1]:
                    collection[j], collection[j - 1] = collection[j - 1], collection[j]
        return collection

    @staticmethod
    def less(a, b):
        return a < b

    @staticmethod
    def exch(collection, i, j):
        # print('before: ', collection)
        collection[i], collection[j] = collection[j], collection[i]
        # print('after: ', collection)


if __name__ == "__main__":
    from test import *
    # -1, 3, 4, 0, -2, -5, 9, -3, 0, 5, -1, -4, 5, 1, 5
    test(QuickSort.sort)




