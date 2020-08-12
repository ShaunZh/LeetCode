'''
堆排序：就是将数组看成一个二叉树，建立堆就是将最大值放到数组的0位置，也就是二叉树的顶点位置，
        然后将当前排序的最大元素交换到0位置，然后不断重复

'''
def heap_sort(collection):
    # 1. 建立堆: 堆化
    def heapify(unsorted, index, heap_size):
        largest = index
        left_index = 2 * index + 1
        right_index = 2 * index + 2

        if left_index < heap_size and unsorted[left_index] > unsorted[largest]:
            largest = left_index
        if right_index < heap_size and unsorted[right_index] > unsorted[largest]:
            largest = right_index
        if largest != index:
            unsorted[index], unsorted[largest] = unsorted[largest], unsorted[index]
            heapify(unsorted, largest, heap_size)

    # 2. 将二叉树的叶子结点进行堆化，堆化后，值最大的结点就被放置在二叉树的顶点，也就是在[0]位置
    length = len(collection)
    for i in range(length // 2 - 1, -1, -1):
        heapify(collection, i, length)

    print('collection: ', collection)
    for i in range(length - 1, -1, -1):
        # 3. 因为每次堆化后，最大值都被放置在顶点(数组[0])位置，因此依次将最大值从数组的尾部像前放置
        collection[0], collection[i] = collection[i], collection[0]
        # 4. 重新对为排序的数组元素进行堆化处理
        heapify(collection, 0, i)

    return collection


if __name__ == '__main__':
    from test import *
    test(heap_sort)
