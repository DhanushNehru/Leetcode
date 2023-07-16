var smallestSufficientTeam = function(req_skills, people) {
    const skillToId = new Map(), N = req_skills.length;
    for (let i = 0; i < N; i++)
        skillToId.set(req_skills[i], i);
    const dp = new Array(1 << N).fill(N + 1);
    dp[0] = 0;
    const res = Array(1 << N).fill(N + 1).map(() => []);
    for (let i = 0; i < people.length; i++) {
        let peopleMask = 0;
        for (const skill of people[i])
            if (skillToId.has(skill))
                peopleMask |= (1 << skillToId.get(skill));
        for (let j = (1 << N) - 1; j >= 0; j--)
            if (dp[j] + 1 < dp[j | peopleMask]) {
                dp[j | peopleMask] = dp[j] + 1;
                res[j | peopleMask] = res[j].concat(i);
            }
    }
    return res[(1 << N) - 1];
};