//Given an array find any three numbers which sum to zero. Give the best algorithm.
var input = [-3, -2, 0, 2, 4];
var sort = require('./QuickSort.js');
function sumzero (input) {
	var p1, p2, p3;
	var sorted_arr = sort(input);
	for (var i = sorted_arr.length - 1; i >= 0; i--) {
		p1 = sorted_arr[i];
		for (var j = 0; i < i; j++) {
			sorted_arr[i]
		};
	};
}