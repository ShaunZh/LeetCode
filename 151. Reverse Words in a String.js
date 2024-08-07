
/* the solution has two steps:
1. remove extra spaces, contains the leading spaces, the trailing spaces and multiple spaces between two words
2. reverse the string
*/
function removeExtraSpaces(s) {
    let left = 0;
    let right = 0;
    let newS = ''
    for (let left = 0; left < s.length; left++) {
        let it = s[left];
        // remove the leading spaces
        if ((right === 0) && it === ' ') {
            continue;
        }
        // remove multiple spaces between two words;
        if (right && newS[right - 1] === ' ' && it === ' ') {
            continue;
        }
        newS += it;
        right++;
    }
    // remove trailing spaces
    right = newS.length - 1;
    while (newS[right] === ' ') right--;
    return newS.substring(0, right + 1);
}

function reversArr(strArr) {
    const len = strArr.length - 1;
    for (let i = 0; i < strArr.length >> 1; i++) {
        [strArr[i], strArr[len - i]] = [strArr[len - i], strArr[i]];
    }
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    const newS = removeExtraSpaces(s);
    const arr = newS.split(' ')
    reversArr(arr)
    return arr.join(' ');
};

