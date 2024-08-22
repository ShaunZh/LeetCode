/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/*
The key aspects of this solution are:
1. Using a deque to maintain the indices of the maximum elements in the current window.
2. Removing elements from the deque that are out of the current window.
3. Removing elements from the end of the deque that are smaller than the current element. It creates a descending order arry. The first element is the greatest element.
4. Adding the maximum element (the element at the front of the deque) to the result array when the window is full.
*/
var maxSlidingWindow = function (nums, k) {
    const deque = [];
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        // remove elements from that deque that are out of the current window;
        while (deque.length > 0 && deque[0] < i - k + 1) {
            deque.shift();
        }
        // remove elements that are smaller than the current element, it creates a descending order array.
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        // add the current element it is the greatest element of the deque array.
        deque.push(i);
        // check if a window is formed, if it is,  getting the greatest element from the window.
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
};

/**
 * 
 * why the first element is the greatest in a window?
 * Excellent question! The first element in the deque is always the greatest in the current window due to how we maintain the deque. Let me explain this in detail:

1. Deque Property:
   The deque is maintained such that it contains indices, and the corresponding elements are in decreasing order from front to back.

2. Removal of Smaller Elements:
   When we add a new element, we remove all elements from the back of the deque that are smaller than the current element. This ensures that the elements in the deque are always in decreasing order.

3. Window Size Maintenance:
   We also remove elements from the front of the deque that are outside the current window.

4. Result of These Operations:
   Due to steps 2 and 3, the front of the deque always contains the index of the largest element in the current window.

Let's go through an example to illustrate this:

Consider the array [1, 3, -1, -3, 5, 3, 6, 7] with k = 3

1. After processing 1: deque = [0]
2. After processing 3: deque = [1] (1 is removed as it's smaller than 3)
3. After processing -1: deque = [1, 2]
   - Window is [1, 3, -1], max is 3, which is at the front of the deque

4. After processing -3: deque = [1, 2, 3]
   - Window is [3, -1, -3], max is still 3, at the front of the deque

5. After processing 5: deque = [4]
   - All previous elements are removed as they're smaller than 5
   - Window is [-1, -3, 5], max is 5, which is at the front of the deque

6. After processing 3: deque = [4, 5]
   - Window is [-3, 5, 3], max is still 5, at the front of the deque

7. After processing 6: deque = [6]
   - 5 and 3 are removed as they're smaller than 6
   - Window is [5, 3, 6], max is 6, which is at the front of the deque

8. After processing 7: deque = [7]
   - 6 is removed as it's smaller than 7
   - Window is [3, 6, 7], max is 7, which is at the front of the deque

In each step, the front of the deque always contains the index of the maximum element in the current window. This is why we can always use the first element of the deque to find the maximum in the current window.
 */