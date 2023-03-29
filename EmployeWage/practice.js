let num = '2';
var two = 'shital';
//const list = [{1:num},{2:Two},3,4,4,5];
const list1 = {
    data: {
        details: [
            { num: 1, name: 'shital' }, { num: 'mnn', name: 'vishal' }, { num: 'abn', name: 'karad' }
        ]
    }
}

console.log(list1.name)
for (let i = 0; i < list1.data.details.length; i++) {
    console.log(list1[i]);
}

console.log("for each")
list1.data.details.forEach((i) => {
    console.log(i)
});
const takeUserInput = require('readline-sync')
let myName = takeUserInput.question("Enter your good name")
console.log(myName);
let operation = takeUserInput.question("enter operation number")
if(operation == 1){
    list1.data.details.map((item)=>{
        console.log(item);
    })
}
else{
    console.log("Enter correct option");
}