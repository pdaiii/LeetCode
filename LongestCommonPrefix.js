var longestCommonPrefix = function(strs) {
    // Case 1: No strings
    if(strs.length === 0) {
        return "";    
    }
    console.log(strs.length);
    // Case 2: One string is empty.
    strs.forEach(str => {
        
        if(str.length === 0) {
            return "";
        }
    })
    // Case 3: Common prefixes
    // Access the first letter. If all strs contain that letter then iterate that 
    // letter to the next. If there is no match, return the prefix.
    let letter = strs[0][0];
    let prefix = "";
    let index = 0;
    while(index < strs[0].length) {
        for(let i = 0; i < strs.length; i++) {
            if(letter !== strs[i][index]) {
                return prefix;
            }
        }
        prefix += letter;
        index += 1;
        letter = strs[0][index];
    }
    return;
};
