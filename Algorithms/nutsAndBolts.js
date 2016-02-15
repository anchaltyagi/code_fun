// Given a set of n nuts of different sizes and n bolts of different sizes. There is a one-one mapping between nuts and bolts. 
// Match nuts and bolts efficiently.
// Constraint: Comparison of a nut to another nut or a bolt to another bolt is not allowed. 
// It means nut can only be compared with bolt and bolt can only be compared with nut to see which one is bigger/smaller.

// Other way of asking this problem is, given a box with locks and keys where one lock can be opened by one key in the box.
// We need to match the pair.

// char nuts[] = {'@', '#', '$', '%', '^', '&'}

// Bolts represented as array of character
// char bolts[] = {'$', '%', '&', '^', '@', '#'}
var quickSort = require('./QuickSort.js');
var nuts = ['@', '#', '$', '%', '^', '&'];
var bolts = ['$', '%', '&', '^', '@', '#'];

console.dir(quickSort(nuts));
console.log('********************************************');
console.dir(quickSort(bolts));