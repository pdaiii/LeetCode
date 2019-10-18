function letterCombinations(digits) {
  let result = [""];
  let numbers = ['2','3','4','5','6','7','8','9'];
  let letters = [['a','b','c'],['d','e','f'],['g','h','i'],['j','k','l'], ['m','n','o'], ['p','q','r','s'], ['t','u','v'], ['w','x','y','z']];

  for(let i = 0; i < digits.length; i++) {
    let tempResult;
    let index = numbers.indexOf(digits[i]);
    let chars = letters[index];
    for(let c = 0; c < chars.length; c++) {
      for(let r = 0; r < res.length; r++) {
        tempResult.push(res[r] + chars[c]);
      }
    }
    result = tempResult;
  }
  return result;
}
