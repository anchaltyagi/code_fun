//Print a^b
function power(a, b) {
	if (a == 0) {
		return 0;
	}
	if (b === 0) {
		return 1;
	}
	if (b < 0) {
		return 1 / power(a, -b);
	}

	var half = power(a, Math.floor(b / 2));
	return half * half * ((b % 2 == 1) ? a : 1);
}

console.log(power(2, 6));