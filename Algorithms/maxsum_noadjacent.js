//Question: Given an array of positive numbers, find the maximum sum of a subsequence with the constraint that no 2 
//numbers in the sequence should be adjacent in the array. So 3 2 7 10 should return 13 (sum of 3 and 10) 
//or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).Answer the question in most efficient way.

function maxSum(arr) {
	var incude = arr[0];
	var exclude = 0;
	var exclude_new = 0;
	for (var i = 1; i < arr.length; i++) {
		exclude_new = Math.max(incude, exclude);
		incude = exclude + arr[i];
		exclude = exclude_new;
	};
	return Math.max(incude, exclude);
}

var a = [5, 5, 10, 100, 10, 5];
console.log(maxSum(a));