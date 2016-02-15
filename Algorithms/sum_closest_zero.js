// An Array of integers is given, both +ve and -ve. You need to find the two elements such that their sum is closest to zero.

// For the below array, program should print -80 and 85.

// [1, 60, -10, 70, -60, 85]
var quickSort = require("./QuickSort.js");
var arr = [1, 60, -10, 70, -40, 85];
(function sum_closest_zero(arr) {
	arr = quickSort(arr);
	var l = 0,
		r = arr.length - 1;
	var min_sum = Number.MAX_VALUE;
	var sum = Number.MAX_VALUE;
	while (l < r) {
		sum = arr[l] + arr[r];
		if (Math.abs(sum) < Math.abs(min_sum)) {
			min_sum = sum;
		}
		if (sum < 0) {
			l++;
		} else {
			r--;
		}
	}
	console.log(min_sum);
}(arr));


var arr1 = [17, 5, -20, 30, -45];
var arr2 = [18, 60, -10, 70, -48];

(function sum_closest_zero_two_array(arr1, arr2) {
	arr1 = quickSort(arr1);
	arr2 = quickSort(arr2);
	var l = 0,
		r = arr2.length - 1;
	var min_sum = Number.MAX_VALUE;
	var sum = Number.MAX_VALUE;
	while (true) {
		sum = arr1[l] + arr2[r];
		if (Math.abs(sum) < Math.abs(min_sum)) {
			min_sum = sum;
		}
		if (sum < 0) {
			l++;
		} else {
			r--;
		}
		if (l > arr1.length - 1 && r < 0) {
			break;
		}
	}
	l = 0;
	r = arr1.length - 1;
	while (true) {
		sum = arr2[l] + arr1[r];
		if (Math.abs(sum) < Math.abs(min_sum)) {
			min_sum = sum;
		}
		if (sum < 0) {
			l++;
		} else {
			r--;
		}
		if (l > arr2.length - 1 || r < 0) {
			break;
		}
	}
	console.log(min_sum);
}(arr1, arr2));