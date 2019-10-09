var isValid = function(s) {
//     Case 1: Only open brackets/close brackets
//     Case 2: Mismatched brackets
//     Case 3: Matching brackets
    
//     If you find a opening bracket, push it to the stack. If it's a closing
//     bracket, pop a bracket off the stack. If it matches its closing bracket, 
//     continue. Else, return false.
    opening_brackets = ['(', '[', '{'];
    closing_brackets = [')', ']', '}'];
    brackets = [];
    for(let i = 0; i < s.length; i++) {
        let bracket = s[i];
        if(opening_brackets.includes(bracket)) {
            brackets.push(bracket);   
        }
        if(closing_brackets.includes(bracket)) {
            let curr = brackets.pop();
            let index = closing_brackets.indexOf(bracket);
            if(curr !== opening_brackets[index]) {
                return false;
            }
        }
    }
    return true;
};
