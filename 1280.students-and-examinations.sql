--
-- @lc app=leetcode id=1280 lang=postgresql
--
-- [1280] Students and Examinations
--

-- @lc code=start
-- Write your PostgreSQL query statement below
SELECT
    st.student_id,
    st.student_name,
    su.subject_name,
    COUNT(e.student_id) attended_exams
FROM
    Students st
CROSS JOIN
    Subjects su
LEFT JOIN
    Examinations e
    ON 
        st.student_id = e.student_id AND
        su.subject_name = e.subject_name
GROUP BY
    st.student_id, 
    st.student_name,
    su.subject_name
ORDER BY
    st.student_id,
    su.subject_name
;



-- @lc code=end

