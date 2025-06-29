/*
 * @lc app=leetcode id=680 lang=typescript
 *
 * [680] Valid Palindrome II
 */

// @lc code=start
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;    

    while (left < right) {
        if (s[left] != s[right]){ // If letter is not same
            let subWithoutRight = s.substring(left,right) // Center substring without a char at right
            let subWithoutLeft = s.substring(left+1, right+1) // Center substring without a char at left

            // Should be identical
            return (
                subWithoutRight === reverseString(subWithoutRight) ||
                subWithoutLeft === reverseString(subWithoutLeft) 
            )
        }

        // Letter is same, continue loop
        left++;
        right--;
    }

    return true
};
// @lc code=end

