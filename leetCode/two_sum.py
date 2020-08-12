# Two Sum
#
# Given an array of integers, return indices of the two numbers such that they add up to a specific target.
#
# You may assume that each input would have exactly one solution, and you may not use the same element twice.
#
# Example:
#
# Given nums = [2, 7, 11, 15], target = 9,
#
# Because nums[0] + nums[1] = 2 + 7 = 9,
# return [0, 1].


class Solution:
    @classmethod
    def theySolution(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        numsLen = len(nums)
        if numsLen == 2 and nums[0] + nums[1] == target:
            return [0, 1]

        prevMap = {}  # val : index

        for i, n in enumerate(nums):
            print(i)
            diff = target - n
            if diff in prevMap:
                return [prevMap[diff], i]
            prevMap[n] = i
        return


    # solution： 通过给map来查找
    @classmethod
    def twoSum1(self, nums, target):
        numsLen = len(nums)
        if numsLen == 2 and nums[0] + nums[1] == target:
            return [0, 1]

        i = 0
        j = 0
        dict = {}
        while j < numsLen:
            dict[nums[j]] = j
            j += 1

        while i < numsLen - 1:
            minusVal = target - nums[i]
            if minusVal in dict and dict.get(minusVal) != i:
                return [i, dict.get(minusVal)]
            i += 1


if __name__ == '__main__':

    arr = Solution.twoSum1([2, 4, 6], 6)
    print(arr)