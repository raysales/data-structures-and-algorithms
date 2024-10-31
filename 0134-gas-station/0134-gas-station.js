/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    
    // edge case when total cost > total gas
    //if (cost.reduceRight((acc, cur) => acc + cur, 0) > 
    //    gas.reduceRight((acc, cur) => acc + cur, 0);) return - 1
    let curGas = 0
    let accGas = 0
    let stationIdx = 0
    
    for (let i = 0; i < gas.length; i++) {
        curGas += gas[i] - cost[i]
        accGas += gas[i] - cost[i]
        
        // if not enough gas skip this station & reset curGas
        if (curGas < 0) {
            stationIdx = i + 1
            curGas = 0
        }
    }
    // if accGas >= 0 return stationIdx, else -1
    return accGas >= 0 ? stationIdx : -1
};