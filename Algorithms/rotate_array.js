// Problem: Rotate an array of n elements to the right by k steps. For example, with n = 7 and k = 3,
// the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. 
// How many different ways do you know to solve this problem?

function solution(n, k) {
	var result = [];
	var inc = 1;
	for (var i = 0; i < n; i++) {
		if (k !== 0) {
			result[i] = n - k + 1;
			k--;
		} else {
			result[i] = inc;
			inc++;
		}
	}
	console.log(result);
}

solution(9,5);