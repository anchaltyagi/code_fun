function closestPerfectQuare(n){
  var a = Math.sqrt(n);
  var floor_val = Math.floor(a);
  var ceil_val = floor_val +1;
  var floor_square = floor_val * floor_val;
  var ceil_square = ceil_val * ceil_val;
  var closest = n - floor_square > ceil_square - n ? ceil_square : floor_square;
  return closest;
}

console.log(closestPerfectQuare(50));