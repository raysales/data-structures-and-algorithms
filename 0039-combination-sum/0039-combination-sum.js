/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const output = []

        const dfs = (idx, curSum, curCombo) => {
            // base case target reached
            if (curSum === target) return output.push([...curCombo])

            // base case curSum > target then not feasible
            if (curSum > target) return
            
            // traverse through input
            for (let i = idx; i < candidates.length; i++) {
                curCombo.push(candidates[i])
                dfs(i, curSum + candidates[i], curCombo)
                
                // backtrack
                curCombo.pop()
            }
    }

    dfs (0, 0, [])
    return output  
};