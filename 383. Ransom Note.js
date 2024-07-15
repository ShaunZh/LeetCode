

/**
 * @description: Recommend this solution, becase array is more efficient than object.
 * @param {*} ransomNote
 * @param {*} magazine
 * @return {*}
 */
var canConstruct_using_array = function (ransomNote, magazine) {
    const arr = new Array(26).fill(0);

    for (let i = 0, len = magazine.length; i < len; i++) {
        const utf16code = magazine[i].charCodeAt() - 97;
        arr[utf16code] += 1;
    }
    for (let i = 0, len = ransomNote.length; i < len; i++) {
        const utf16code = ransomNote[i].charCodeAt() - 97;
        if (!arr[utf16code]) {
            return false;
        }
        arr[utf16code] -= 1;
    }
    return true;
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * @summary
 * 1. create an object to store the sum of each letter in magazine
 * 2. iterate the ransomNote and check if the letter is in the object or the sum is 0 
 * 3. if not, return false
 * 4. if the letter is in the object, minus one;
 */
var canConstruct_using_object = function (ransomNote, magazine) {
    const objMagazine = {};

    for (let i = 0, len = magazine.length; i < len; i++) {
        objMagazine[magazine[i]] = (objMagazine[magazine[i]] || 0) + 1;
    }
    for (let i = 0, len = ransomNote.length; i < len; i++) {
        const letter = ransomNote[i];
        if (!objMagazine[letter]) {
            return false;
        }
        objMagazine[letter] -= 1;
    }
    return true;
};
