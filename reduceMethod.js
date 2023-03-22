//the reduce method aplies against a accumlaterand each element 
//in th array form (right to left) to reduce it a singlr value

const array = [1,2,3,4,5];
var sum = array.reduce((total ,values ) => total + values);
console.log(sum);