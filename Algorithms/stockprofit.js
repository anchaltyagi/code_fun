//You have a sequence of data which tells about daily prices of a stock (of a company in some market). 
//Given the sequence for N such days tell when should one buy and sell to maximize the profit.
// (for simplicity Assume you can buy only 1 stock). 
//Prices of stock is same for a single day and you cannot buy and sell on the same day. 


function profit(arr) {
	var max_profit = 0;
	var selling_day = arr.length;
	var buying_day = 0;	
	var buying = Number.MAX_VALUE;
	var selling = 0;

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] < buying && selling_day > i) {
			buying = arr[i];
			buying_day = i;
		}
		if (buying < arr[i]) {
			selling = arr[i];
			selling_day = i;
		}
	};
	max_profit = selling - buying;
	console.log("max profit = "+ max_profit);
	console.log("buying day = "+ buying_day);
	console.log("selling day = "+ selling_day);
}

var a =  [150 ,149 ,155, 157, 137, 150, 167, 50] ;
profit(a);