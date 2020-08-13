# 26.Given an array nums and a value val, remove all instances of that value in-place and return the new length.
#
# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
#
# The order of eleme


class Solution:
    @classmethod
    # 解题思路：这种问题其实就是将不等于val的值放到数组中，可以理解为给数组重新赋值，其中需要设置两个pointer
    def theySolution(cls, nums, val) -> int:
        i = 0
        length = len(nums)
        for j in range(length):
            if nums[j] != val:
                nums[i] = nums[j]
                i += 1
        return i

    @classmethod
    # 问题：首先对题目理解错误，
    def removeElement (self, nums, val) -> int:
        count = nums.count(val)
        i = 0
        while i < count:
            nums.remove(val)
            i += 1
        return len(nums)

        # while j < len(nums):
        #     if nums[i] === nums[j]:
        #         nums.remove(j)
        #         continue
        #     j++


if __name__ == '__main__':

    arr = Solution.removeElement([0, 0, 1, 1, 1, 2, 2, 3, 3, 4], 2)
    print(arr)