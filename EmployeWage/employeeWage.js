console.log("Welcome to employee wage calculation")
const f = require('./util');
const wage = f.WageCalByRandom(0, 2);
console.log("random number is " + wage);
const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const IS_FULL_TIME = 2;
const IS_PART_TIME = 1;
const IS_UPSENT = 0;

switch (wage) {
    case 1:
        var dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
        console.log(" Part time employee is present & daily wage is " + dailyWage);
        break;
    case 2:
        var dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
        console.log("Employee is present & daily wage is " + dailyWage);
        break;
    default:
        console.log("Employee is upsent")

}
