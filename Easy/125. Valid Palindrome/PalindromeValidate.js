/**
 * @param {string} s
 * @return {boolean}
 */


var isPalindrome = function(s) {
    let str = s.split(/[^a-zA-Z0-9]/).join('').toLowerCase();
    return checkPalindrome(str);
};

const checkPalindrome = str => {
  let strReverse = str.split("").reverse().join("");
  if (str === strReverse) {
    return true;
  } else return false;
}
