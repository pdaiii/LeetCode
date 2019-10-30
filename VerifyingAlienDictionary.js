/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    // Compare letters between words to ensure that they are arranged according to the order alphabet. If letters match between words, check each additional letter. If all letters match between two words, pick the shorter one. Output whether the words have been properly arranged.
    
    // Go through each word
    // If the letters match then iterate through the rest of the letters in the corresponding words
    // Break if the ordering does not match
    
    // Handle words of different length
    let index = 0;
    let word = words[index];
    
    for(let i = 1; i < words.length; i++) {
        if(bigger(word, words[i], order)) return false;
        word = words[i];
    }
    return true;
};

function bigger(str1, str2, order) {
    let length1 = str1.length;
    let length2 = str2.length;
    
    for(let i = 0; i < length1 && i < length2; i++) {
        if(order.indexOf(str1[i]) < order.indexOf(str2[i])) return false;
        if(order.indexOf(str1[i] > order.indexOf(str2[i]))) return true;
    }
    return str1 > str2;
};
