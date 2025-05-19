/*
 * @lc app=leetcode id=551 lang=typescript
 *
 * [551] Student Attendance Record I
 */

// @lc code=start
function checkRecord(s: string): boolean {

  let a: number = 0;
  let l: number = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    
    switch (char) {
      case 'A':
      a++;
      l = 0;
      break;
      case 'L':
      l++;
      break;
      default:
      l = 0;
      break;
    }


    if (a > 1)
      return false;
    else if (l > 2)
      return false
  }
  return true;
};
// @lc code=end

