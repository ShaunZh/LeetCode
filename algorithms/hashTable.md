
## Which data type we should select to create hash table?
In JavaScript, there is three data type we can select:
* array
* map
* object

When we use `Array`?
1. if the size of data is less than 1000, we should use `array`;
2. if we need to calculate the sum of each single letter, we should use array to store the sum. Using the UTF-16 code of letter as the key of array, the sum of letter as the value of array. 
(Note: we can use `string.chartCodeAt()` to get the UTF-16 code, if the letters are all lowercase lettters,we can get the key by using `const key = string.charCodeAt() - a.charCodeAt()`, the letter `a` is the first letter, so we have to minus its UTF-16 code.). In order to understand the key point, you can check the problem [383. Ransom Note](https://leetcode.com/problems/ransom-note/description/) of LeetCode.



什么时候使用哈希法? 
当我们需要查询一个元素是否出现过，或者一个元素是否在集合里的时候，就要第一时间想到哈希法。


