//Convert "8708 7 87 87 87  - 7878 87 81"; into "870-878-787-877-878-87-81". Add "-"  after 3 digits last should not be only 1 digit if so 
//make last 2-2

function solution(input) {
	var digits = input.match(/\d/g);
	var result = "";
	var count = Math.floor(digits.length / 3);

	if (digits.length - count * 3 < 2) {
		count--;
	}
	for (var i = 0; i < count; i++) {
		result += digits.splice(0, 3).join("");
		result += "-";
	};
	if (digits.length % 3 === 1) {
		result += digits.splice(0, 2).join("") + "-" + digits.join("");
	}else if(result.length === 0){
		result = result.substring(0, result.length -1);
	}else{
		result += digits.join("");
	}
	console.log(result);
}

solution("8708 7 87 87 87  - 7878 87 813");