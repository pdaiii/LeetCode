// Sum all the previous values until the currentSum is negative. If so, reset the sum to 0. Track the maxSum as you go.
var maxSubArray = function(nums) {
    let sum = 0;
    let maxSum = 0;
    
    nums.forEach(num => {
        sum += num;
        if(sum < 0) {
            sum = 0;
        }
        if(sum > maxSum) {
            maxSum = sum;
        }
    })
    return maxSum;
};

// Keep a count of the current sum by either the current value in the array or the current sum plus the current value.
// Update the max sum as you go.
var maxSubArray = function(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    
    for(let i = 1; i < nums.length; i++) {
        let current = nums[i];
        currentSum = Math.max(current, current + currentSum);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}
