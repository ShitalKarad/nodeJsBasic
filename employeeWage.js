function random(min,max){
return Math.floor(
    Math.random() * (max - min + 1) + min
)
}

let wage = random(0,1);
console.log("random number is "+wage);

if(wage == 1){
    console.log("Employee is present " );
}else{
    console.log("Employee is  " );
}

