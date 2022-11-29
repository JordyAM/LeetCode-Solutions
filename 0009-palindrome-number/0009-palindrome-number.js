/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let pali = x.toString().split('').reverse().join('');
    if ( pali == x){
        return true;
    }
    else {
        return false
    }
};