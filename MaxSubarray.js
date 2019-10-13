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
