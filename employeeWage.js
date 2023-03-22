console.log("Welcome to employee wage calculation")
function random(min,max){
return Math.floor(
    Math.random() * (max - min + 1) + min
)
}

let wage = random(0,1);
console.log("random number is "+wage);
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;

if(wage == 1){
    var dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
    console.log("Employee is present & daily wage is " +dailyWage );
}else{
    var dailyWage = WAGE_PER_HOUR * 0;
    console.log("Employee is & daily wage is "+ dailyWage );
}


