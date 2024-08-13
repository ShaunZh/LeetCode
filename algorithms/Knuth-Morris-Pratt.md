# Knuth-Morris-Pratt 
The Knuth-Morris-Pratt algorithm is called [KMP](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm). For me, the algorithm is hard to understand. 
There are some resources to help me understand the algorithm:
1. [The Knuth-Morris-Pratt Algorithm in my own words](http://jakeboxer.com/blog/2009/12/13/the-knuth-morris-pratt-algorithm-in-my-own-words/)
2. [Knuth-Morris-Pratt substring search](https://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html);
3. [最浅显易懂的 KMP 算法讲解](https://www.youtube.com/watch?v=af1oqpnH1vA)

In order to use the algorithm, there are some things need to know first:
1. **Proper prefix** 
2. **Proper suffix**
3. How to create `the partial match table` by using `proper prefix` and `proper suffix`


## Proper prefix


## solution of [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/description/)

```js
const genNext = (pattern) => {
    const lps = new Array(pattern.length).fill(0);
    let i = 1;
    let len = 0;
    while(i < pattern.length) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            // if pattern[i] is not equals to pattern[len], then comparison back;
            if (len !== 0) {
                len = lps[len - 1]
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

var strStr = function(haystack, needle) {
    let i = 0;
    let j = 0;
    const lps = genNext(needle);
    while (i < haystack.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === needle.length) {
                return i - j;
            }
        } else {
            if (j !== 0) {
                const next = lps[j - 1];
                j = next;
            } else {
                i++;
            }
        }
    }
    return -1;
}
```