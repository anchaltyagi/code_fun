// Maximum profit by buying and selling a share at most twice
// In a daily share trading, a buyer buys shares in the morning and sells it on same day. If the trader is allowed to make at most 2 transactions in a day, where as second transaction can only start after first one is complete (Sell->buy->sell->buy). Given stock prices throughout day, find out maximum profit that a share trader could have made.

// Examples:

// Input:   price[] = {10, 22, 5, 75, 65, 80}
// Output:  87
// Trader earns 87 as sum of 12 and 75
// Buy at price 10, sell at 22, buy at 5 and sell at 80

// Input:   price[] = {2, 30, 15, 10, 8, 25, 80}
// Output:  100
// Trader earns 100 as sum of 28 and 72
// Buy at price 2, sell at 30, buy at 8 and sell at 80

// Input:   price[] = {100, 30, 15, 10, 8, 25, 80};
// Output:  72
// Buy at price 8 and sell at 80.

// Input:   price[] = {90, 80, 70, 60, 50}
// Output:  0
// Not possible to earn.


function profit(price) {
	var profit = new Array(price.length + 1).join('0').split('').map(parseFloat);
	console.log(profit);
	var max_price = price[price.length - 1];
	for (var i = price.length - 2; i > 0; i--) {
		if (max_price < price[i]) {
			max_price = price[i];
		}
		profit[i] = Math.max(profit[i + 1], max_price - price[i]);
	};

	console.log(profit);

	var min_price = price[0];
	for (var i = 1; i < price.length; i++) {
		if (price[i] < min_price) {
			min_price = price[i];
		}
		profit[i] = Math.max(profit[i - 1], (profit[i] + (price[i] - min_price)));
	};
	console.log(profit);

	console.log("Profit: " + profit[price.length - 1]);
}

var a = [2, 30, 15, 10, 8, 25, 80];
profit(a);