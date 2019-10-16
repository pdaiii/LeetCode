var longestPalindrome = function(s) {
    let palindromes = [];
    for(let i = 0; i < s.length; i++) {
        for(let j = i+1; j <= s.length; j++) {
            let substring = s.slice(i, j);
            if(isPalindrome(substring)) {
                palindromes.push(substring);
            }
        }
    }
    
    let max = 0;
    let longest = '';
    for(let i = 0; i < palindromes.length; i++) {
        if(palindromes[i].length > max) {
            max = palindromes[i].length;
            longest = palindromes[i];
        }
    }
    return longest;
};

function isPalindrome(s) {
    let start = 0;
    let end = s.length - 1;
    
    while(start <= end) {
        if(s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}
