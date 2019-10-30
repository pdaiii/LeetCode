/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 0: 0
    // 1: 1
    // 2: 2
    // 3: 3
    // 4: 5 (1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2)
    // 5: 8 (1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 1+2+2+1, 2+1+1+1, 2+1+2, 2+2+1)
    // If we observe the following test cases, you will notice that everything after the first three test cases is a sum of its previous two test cases. We can solve this problem using dynamic programming and return the last element in an N element array.
    
    let temp = new Array(n+1).fill(0);
    
    temp[0] = 0;
    temp[1] = 1;
    temp[2] = 2;
    
    for(let i = 3; i <= n; i++){
        temp[i] = temp[i-1] + temp[i-2];
    }
    
    return temp[n];
};
