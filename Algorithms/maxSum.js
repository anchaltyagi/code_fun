//Largest Sum Contiguous Subarray
//{-2, -3, 4, -1, -2, 1, 5, -3}
function largestSum(arr){
  var max_sum_ends_here =0;
  var max_sum_so_far =0;
  for (var i = 0; i < arr.length; i++) {
    max_sum_ends_here += arr[i];
    if(max_sum_ends_here < 0){
      max_sum_ends_here = 0;
    }
    else if(max_sum_ends_here > max_sum_so_far){
      max_sum_so_far = max_sum_ends_here;
    }
  }
  return max_sum_so_far;
}
var a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(largestSum(a));

//Find the largest pair sum in an unsorted array
//Given an unsorted of distinct integers, 
//find the largest pair sum in it. For example, the largest pair sum in {12, 34, 10, 6, 40} is 74.

// function maxSum(arr){
//   var first = Math.max(arr[0], arr[1]);
//   var second = Math.min(arr[0], arr[1]);
//   for (var i = 2; i < arr.length; i++) {
//     if(arr[i] > first){
//       second = first;
//       first = arr[i];
//     }
    
//   }
//   console.log(first + "--" +second);
//   return(first + second);
// }
// var input =[12, 34, 10, 6, 40];
// console.log(maxSum(input));