//Replace element of an Array with nearest bigger number at right side of the Array in O(n)
//For example if the input Array is 7, 5, 6, 3, 4, 1, 2, 9, 11
//output array should be 9, 6, 9, 4, 9, 2, 9, 11, 11
var stack = require('../Stack/Stack.js');
var s = new stack();

function seriesCovert(a) {
	s.push(a[a.length - 1]);
	for (var i = a.length - 2; i >= 0; i--) {
		var peek = s.peek();
		if(peek > a[i]){
			s.push(a[i]);
			a[i] = peek;
			console.log(a);
		}
		else{
			var temp = Number.MIN_VALUE;;
			while(temp < a[i]){
				temp = s.pop();
			}
			s.push(temp);
			s.push(a[i]);
			a[i] = temp;
			console.log(a);
		}
	};
	return a;
}

var a = [7, 5, 6, 3, 4, 1, 2, 9, 11];
console.log(seriesCovert(a));