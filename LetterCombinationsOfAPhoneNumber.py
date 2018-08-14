def main():
	class Solution(object):
	    def letterCombinations(digits):
	        """
	        :type digits: str
	        :rtype: List[str]
	        """
	        number_letters_dictionary={'2':['a', 'b', 'c'], '3':['d', 'e', 'f'], '4':['g', 'h', 'i'],
	         '5':['j', 'k', 'l'], '6':['m', 'n', 'o'], '7':['p', 'q', 'r', 's'], '8':['t', 'u', 'v'],
	          '9':['w', 'x', 'y', 'z']};
	        output=number_letters_dictionary[digits[0]];
	        num_output=[];

	        for digit in digits[1:]:
	        	num_output = [combination1 + combination2 for combination1 in output for combination2 
	        	in number_letters_dictionary[digit]];
	        	# Most important
	        	output=num_output;
	        return output;

	# Test Cases
	output=Solution.letterCombinations('23');
	print(output);

if __name__ == '__main__':
	main();