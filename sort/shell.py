def shell_sort(collection):
    '''
    希尔排序算法：
        1. 由大到小间距(Gap)，最後一個Gap一定要是1，书上一般表述为 增量
        2. 將待排序的数据依照指定的間距(Gap)分組，然后再每个分组中进行插入排序
        3. Gap的選擇對執行效率有很大的影響

    常见的Gap选择：
        Shell原本的Gap：N/2、N/4、...1(反覆除以2)
        Hibbard的Gap：1、3、7、...、2k-1
        Knuth的Gap: 1、4、13、...、(3k - 1) / 2
        Sedgewick的Gap: 1、5、19、41、109、...

    在本算法中选用的Knuth的Gap
    '''
    gap = 1
    length = len(collection)

    # 1. 计算gap: 获取数组长度以内的最大gap值
    while gap < length // 3:
        gap = 3 * gap + 1

    while gap >= 1:
        #  插入排序: 此处插入排序时，与一般插入排序不同的是，正常的插入排序，下一个选择排序的元素索引值都是以1递增或递减的，
        #           而在希尔排序中，每个选择的元素索引值都是以gap为间隔递增或递减的的元素
        for i in range(gap, length, gap):
            key = collection[i]
            j = i - gap
            while j >= 0 and key < collection[j]:
                collection[j + gap] = collection[j]
                j -= gap
            collection[j + gap] = key
        # end 插入排序

        gap = gap // 3

    return collection


if __name__ == '__main__':
    from test import *
    print(shell_sort.__doc__)
    test(shell_sort)
