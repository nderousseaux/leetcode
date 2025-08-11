/*
 * @lc app=leetcode id=929 lang=typescript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
function numUniqueEmails(emails: string[]): number {
    let res: string[] = []
    for (let e in emails) {
        let [local, domain] = emails[e].split('@');        
        let norm = local.split(".").join("").split("+")[0]
        let normalizedEmail = norm + "@" + domain
        
        if (!res.includes(normalizedEmail)) {
            res.push(normalizedEmail)
        }
    }

    return res.length
};
// @lc code=end

