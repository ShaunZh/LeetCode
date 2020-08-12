import time


def test(sort_func):
    user_input = input("请输入需排序的数字，以','分隔: ")
    unsorted = [int(x) for x in user_input.split(',')]
    print('unsorted : ', unsorted)
    start_time = time.process_time()
    sorted_arr = sort_func(unsorted)
    print('sorted spend time: ', time.process_time() - start_time)
    print('sorted: ', sorted_arr)

