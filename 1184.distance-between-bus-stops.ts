/*
 * @lc app=leetcode id=1184 lang=typescript
 *
 * [1184] Distance Between Bus Stops
 */

// @lc code=start
function distanceBetweenBusStops(distance: number[], start: number, destination: number): number {
    let totalDist = 0;
    let distForward = 0;
    
    // Ensure start is smaller than destination for consistent calculation
    if (start > destination) {
        [start, destination] = [destination, start];
    }
    
    // Calculate both distances in one loop
    for (let i = 0; i < distance.length; i++) {
        totalDist += distance[i];
        if (i >= start && i < destination) {
            distForward += distance[i];
        }
    }

    return Math.min(distForward, totalDist - distForward);
};

