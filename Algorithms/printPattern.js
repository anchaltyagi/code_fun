// Print a pattern without using any loop
// Given a number n, print following pattern without using any loop.

// Input: n = 16
// Output: 16, 11, 6, 1, -4, 1, 6, 11, 16

// Input: n = 10
// Output: 10, 5, 0, 5, 10

(function printPattern(num) {
	print(num, -5);

	function print(n, increment) {
		console.log(n);
		if (n <= 0 && increment < 0) {
			increment = -increment;
		};
		n =  n + increment;
		if (n <= num) {
			print(n, increment);
		}
	}
})(16);