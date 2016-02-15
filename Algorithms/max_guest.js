// Find the point where maximum intervals overlap
// Consider a big party where a log register for guest’s entry and exit times is maintained. Find the time at which there are maximum guests in the party. Note that entries in register are not in any order.

// Example:

// Input: arrl[] = {1, 2, 9, 5, 5}
//        exit[] = {4, 5, 12, 9, 12}
// First guest in array arrives at 1 and leaves at 4, 
// second guest arrives at 2 and leaves at 5, and so on.

// Output: 5
// There are maximum 3 guests at time 5.  



function find_max_guest(arr, exit) {
	var temp_obj = [];
	var newObj = {};
	var max_guest_count = 0;
	var max_guest = {};
	for (var i = 0; i < arr.length; i++) {
		var obj = temp_obj.filter(function(elem) {
			return elem.arrival >= arr[i] && elem.exit <= exit[i];
		});
		newObj = {
			arrival: arr[i],
			exit: exit[i],
			count: 1
		}
		if (obj.length > 0) {
			newObj.count = obj.length + 1;
		}
		temp_obj.push(newObj);
		if(max_guest_count < newObj.count){
			max_guest_count = newObj.count;
			max_guest = newObj;
		}
		
	};

	console.dir(max_guest);
	console.dir(temp_obj);
}

var arrl = [1, 2, 9, 5, 5],
	exit = [4, 5, 12, 9, 12];

find_max_guest(arrl, exit);