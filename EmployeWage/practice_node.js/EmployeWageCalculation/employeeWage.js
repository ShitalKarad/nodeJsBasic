console.log("Welcome to employee wage calculation")
const input = require('../../util');

const WAGE_PER_HOUR = 20;
const FULL_DAY_HOUR = 8;
const PART_TIME_HOUR = 4;
const IS_FULL_TIME = 2;
const IS_PART_TIME = 1;
const IS_UPSENT = 0;
const WORKING_DAYS_PER_MONTH = 22;
const WORKING_HOURS_PER_MONTH = 100;

var totalWage = 0;

let dayCount = 1;
let workingHours = 0;

while (dayCount < WORKING_DAYS_PER_MONTH && workingHours < WORKING_HOURS_PER_MONTH) {
    const wage = input.WageCalByRandom(0, 2);
    console.log("random number is " + wage);
 
    switch (wage) {
        case IS_PART_TIME:
            var dailyWage = WAGE_PER_HOUR * PART_TIME_HOUR;
            console.log(" Part time employee is present & daily wage is ", dailyWage);
            var totalWage = dailyWage * WORKING_DAYS_PER_MONTH;
            workingHours +=PART_TIME_HOUR;
            console.log("Total wage for a month ", totalWage)
            break;
        case IS_FULL_TIME:
            var dailyWage = WAGE_PER_HOUR * FULL_DAY_HOUR;
            console.log("Employee is present & daily wage is ", dailyWage);
            var totalWage = dailyWage * WORKING_DAYS_PER_MONTH;
            workingHours += FULL_DAY_HOUR;
            console.log("Total wage for a month ", totalWage)
            break;
        default:
            console.log("Employee is upsent")

    }
    dayCount++;
}
totalWage = totalWage+dailyWage;
console.log('working hours in a month ',workingHours)
console.log("daily wage for a month ",totalWage)