var maxSubArray = function(nums) {
//     Case 1: All positive
//     Case 2: Mix of negative and positive
//     Keep a continuous sum unless it's negative, then reset it to 0.    
    let sum = 0;
    let maxSum = 0;
    nums.forEach(num => {
        sum += num;
        if(sum > maxSum) {
            maxSum = sum;
        }
        if(sum < 0){
            sum = 0;
        }
    })
    return maxSum;
};
