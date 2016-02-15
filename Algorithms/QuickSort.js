var quickSort = function qSort(arr) {
	if (arr.length == 0) {
		return [];
	}
	var left = [];
	var right = [];
	var pivot = arr[0];
	for (var i = 1; i < arr.length; i++) {
		//console.log("pivot: " + pivot + " current element: " + arr[i]);
		if (arr[i] < pivot) {
			//console.log("moving " + arr[i] + " to the left");
			left.push(arr[i]);
		} else {
			//console.log("moving " + arr[i] + " to the right");
			right.push(arr[i]);
		}
	}
	return qSort(left).concat(pivot, qSort(right));
};
module.exports = quickSort;