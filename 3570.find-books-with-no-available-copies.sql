--
-- @lc app=leetcode id=3570 lang=posgresql
--
-- [3570] Find Books with No Available Copies
--

-- @lc code=start
-- # Write your postgresql query statement below
WITH books AS (
    SELECT
        e.*,
        (
            SELECT COUNT(*)
            FROM borrowing_records b
            WHERE b.book_id = e.book_id AND b.return_date IS NULL
        ) AS current_borrowers
    FROM library_books e
)
SELECT book_id, title, author, genre, publication_year, current_borrowers
FROM books
WHERE current_borrowers = total_copies
ORDER BY
    current_borrowers DESC,
    title
;
-- @lc code=end
