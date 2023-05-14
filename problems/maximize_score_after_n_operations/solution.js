/**
 * @param {number[]} nums
 * @return {number}
 */
var maxScore = function(nums) {
  const m = nums.length, n = m / 2;
  const dp = new Array(1 << 14).fill(-1);
  const gcd = new Array(m).fill().map(() => new Array(m).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < m; j++) {
      gcd[i][j] = gcdOf(nums[i], nums[j]);
    }
  }

  function func(op, mask) {
    if (op > n) return 0;
    if (dp[mask] !== -1) return dp[mask];

    let score = 0;
    for (let i = 0; i < m; i++) {
      if ((mask & (1 << i))) continue;
      for (let j = i + 1; j < m; j++) {
        if ((mask & (1 << j))) continue;
        const newMask = (1 << i) | (1 << j) | mask;
        score = Math.max(score, op * gcd[i][j] + func(op + 1, newMask));
      }
    }
    dp[mask] = score;
    return score;
  }

  return func(1, 0);
};

const gcdOf = function(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcdOf(b, a % b);
  }
};