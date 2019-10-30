/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // For this problem we can use dynamic programming to solve the minimum number of coins required to make any amount less than and including the given amount.
    // [0,1,1,2,2,1,2,2,3,3,2,3]
    
    if(amount < 0) return -1;
    
    let change = [0];

    // Go through an array of change up to the amount given.
    while(change.length <= amount) {
        // console.log(change);
        let minimum = Infinity;
        // Go through each of the coins given
        for(let i = 0; i < coins.length; i++) {
            // If the current length of the array is less than the coin amount. We cannot make any denominations.
            if(change.length < coins[i]) continue;
            minimum = Math.min(minimum, change[change.length - coins[i]]+1)
        }
        change.push(minimum);
    }
    return change[amount] === Infinity ? -1 : change[amount];
};
