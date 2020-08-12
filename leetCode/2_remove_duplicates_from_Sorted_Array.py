# 26. Remove Duplicates from Sorted Array（https://leetcode.com/problems/remove-duplicates-from-sorted-array/）
# Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
# Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.


class Solution:
    @classmethod
    # 解题思路：two pointer
    def theySolution(cls, nums) -> int:
        if len(nums) <= 1:
            return len(nums)
        i = 0
        for j in range(1, len(nums)):
            if nums[i] != nums[j]:
                i += 1
                nums[i] = nums[j]
        return i + 1

    @classmethod
    # 问题：对题目理解错误，当做未排序的数组进行处理
    def removeDuplicates(self, nums) -> int:
        for i in range(len(nums) - 1):
            if i >= len(nums):
                break

            while (1):
                if nums.count(nums[i]) > 1:
                    n = nums.index(nums[i], i + 1)
                    nums.remove(nums[n])
                    continue
                break
        return len(nums)

        # while j < len(nums):
        #     if nums[i] === nums[j]:
        #         nums.remove(j)
        #         continue
        #     j++


if __name__ == '__main__':

    arr = Solution.theySolution([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
    print(arr)