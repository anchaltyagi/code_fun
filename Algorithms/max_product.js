//Given an array of both positive and negative numbers, 
//find the contiguous range in the array which gives the maximum product. Give an algorithm which runs in O(N).

function maxProduct(arr){
	var max_product = 1;
	var max_product_so_far = 1;
	for (var i = 0; i < arr.length; i++) {
		max_product_so_far *= arr[i];
		if (arr[i] === 0) {
			max_product_so_far = 1;
		};		
		if (max_product_so_far > max_product) {
			max_product = max_product_so_far;
		};
	};

	return max_product;
}

var a = [-1, -3, -10, 10, 0, 60, 2];
console.log(maxProduct(a));