// Given an array of integers, find two numbers such that they add up to a specific target number.

// The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.

// For example:

// Input: numbers={2, 7, 11, 15}, target=9
// Output: index1=1, index2=2
var arr = [2, 7, 11, 15];
var target_sum = 17;
function solution(arr, target_sum) {
	var map = {};
	for (var i = 0; i < arr.length; i++) {
		if (map.hasOwnProperty(arr[i])) {
			console.log("Indexes are: " + (map[arr[i]]+1) + " and " + (i+1));
			return;
		} else {
			map[target_sum - arr[i]] = i;
		}
	};
}
solution(arr, target_sum);