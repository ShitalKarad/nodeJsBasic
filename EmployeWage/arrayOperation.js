const {printDataByMap, printDataByFilter} =require('./util.js');
const util = require('./util')
var readlineSync = require('readline-sync');
const notes = [1,2,3,4,5,6];
function arrayOperations(arr){
    switch(arr){
        case 1 :
            printDataByMap(notes)
        case 2 :
            utils.printDataByFilter()
    }
}