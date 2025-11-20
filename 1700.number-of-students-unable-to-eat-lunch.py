#
# @lc app=leetcode id=1700 lang=python3
#
# [1700] Number of Students Unable to Eat Lunch
#

# @lc code=start
class Solution:
    def countStudents(self, students: List[int], sandwiches: List[int]) -> int:
        
        while sandwiches and sandwiches[0] in students:
            # If student like the sandwich, take it
            if students[0] == sandwiches[0]:
                del(students[0]) 
                del(sandwiches[0])
            # Else, go to end of the queue
            else: 
                students.append(students[0])
                del(students[0])
            
        return len(students)
# @lc code=end

