var search = function(nums, target) {
    if(nums.length === 0) return -1;
    let mid = Math.floor(nums.length / 2);
    console.log(nums);
    if(nums[mid] > target) {
        return search(nums.slice(0,mid), target);
    }
    else if(nums[mid] < target) {
        let output = search(nums.slice(mid+1), target);
        return output === -1 ? -1 : output + mid + 1;
    }
    else {
        return mid;
    }
};
