//this methos creates new array by calling the provided function in every array.
const array = [1,3,5,7,89,12];
let outputArray = array.map(item => item+1);
console.log("output array"+outputArray); 
console.log("my original array"+array);