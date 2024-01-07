/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    const numJobs = profit.length; // Number of jobs
    const jobs = new Array(numJobs);

    for (let i = 0; i < numJobs; ++i) {
        jobs[i] = [endTime[i], startTime[i], profit[i]];
    }

    jobs.sort((a, b) => a[0] - b[0]);
    const dp = new Array(numJobs + 1).fill(0);

    for (let i = 0; i < numJobs; ++i) {
        const [endTime, startTime, profit] = jobs[i];

        const latestNonConflictJobIndex = upperBound(jobs, i, startTime);
        dp[i + 1] = Math.max(dp[i], dp[latestNonConflictJobIndex] + profit);
    }

    return dp[numJobs];
};

function upperBound(jobs, endIndex, targetTime) {
    let low = 0;
    let high = endIndex;

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        if (jobs[mid][0] <= targetTime) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
};