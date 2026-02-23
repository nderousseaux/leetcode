/*
 * @lc app=leetcode id=2383 lang=typescript
 *
 * [2383] Minimum Hours of Training to Win a Competition
 */

// @lc code=start
function minNumberOfHours(initialEnergy: number, initialExperience: number, energy: number[], experience: number[]): number {
    let en: number = initialEnergy;
    let ex: number = initialExperience;
    let res: number = 0;

    for (let i = 0; i < energy.length; i++) {
        if (energy[i] >= en){
            // Train
            while (energy[i] >= en) {
                res++;
                en++
            }
        }
        if (experience[i] >= ex) {
            // Train
            while(experience[i] >= ex) {
                res++;
                ex++;
            }
        }
        ex += experience[i];
        en -= energy[i];
    }


    return res;
    
};
// @lc code=end

