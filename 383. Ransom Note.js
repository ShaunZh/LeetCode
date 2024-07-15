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
var canConstruct = function (ransomNote, magazine) {
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