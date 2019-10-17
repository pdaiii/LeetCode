var permute = function(nums) {
    if(nums.length <= 1) return [nums];
    let permutations = [];
    let last = nums.pop();
    let prev = permute(nums);
    
    prev.forEach( arr => {
        for(let i = 0; i <= arr.length; i++) {
            let insert = arr.slice(0,i).concat([last]).concat(arr.slice(i));
            permutations.push(insert);
        }
    })
    return permutations;
};
