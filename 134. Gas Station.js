/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 * solution: greedy approach
 * the solution has two steps:
  1. calculate the sum of gas and cost, if the sum of gas less than the sum of cost means that's impossible to complete the circle no matter where you start.
  2. use the greedy approach to find the valid starting position:
    2.1 Track Gas in the Tank: As you move from one gas station to the next, you calculate how much gas remains in your "tank" (the variable tank).
    2.2 Reset Starting Point: Whenever your tank becomes negative, it means starting from the current station (or any station before it) won't work, so you reset the start to the next station.
        2.2.1 Why can we reset to i + 1 safely? Because if you can't make it to station i + 1 starting from some earlier station, starting from any station before that won't work either. Therefore, you move forward and try the next station as a starting point.
 */
var canCompleteCircuit = function (gas, cost) {
    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            startIndex = i + 1;
            tank = 0;
        }
    }
    if (totalGas < totalCost) {
        return -1;
    }
    return startIndex;
};