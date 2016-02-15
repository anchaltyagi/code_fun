// Problem: You are given an array. You have to sort the array elements in decreasing order of their frequency.

// eg. [2,3,4,2,8,1,1,2]
// Output: [2 2 2 1 1 3 4 8]

var input = [2, 3, 4, 2, 1, 1, 2];
var quickSort = require("./QuickSort.js");
(function sort_by_frequency(arr) {
	var hash = {};
	for (var i = 0; i < arr.length; i++) {
		if (hash[arr[i]]) {
			hash[arr[i]]++;
		} else {
			hash[arr[i]] = 1;
		}
	};
	var sortedHash = sortObject(hash);
	console.log(sortedHash);
	var output = [];
	for(var prop in sortedHash){
		console.log("key: "+ prop);
		console.log("value: "+ sortedHash[prop].value);
			
		//console.log(Array(sortedHash[prop].value).join(prop).split(''));
		output.concat(Array(sortedHash[prop].value).join(prop).split(''));
	}

	console.log(output);

}(input));

function sortObject(obj) {
	var arr = [];
	var prop;
	for (prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			arr.push({
				'key': prop,
				'value': obj[prop]
			});
		}
	}
	arr.sort(function(a, b) {
		return b.value - a.value;
	});
	return arr; // returns array
}