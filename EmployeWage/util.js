const filterItem =(arryValue,search)=>{
    arryValue.filter((item)=>{
return item === search
    })
}

function printDataByMap(array){
    var result =array.map((item)=>{
        if(item==2){
            return "data is found"
        }
        return "data is not found"
    })
    console.log(result);
    return result;
}

function printDataByFilter (){
    console.log("operation is done");
}

module.exports = {printDataByMap,printDataByFilter}
class utils{
    printDataByFilter(){
        console.log("opertion");
    }
}
module.exports = new utils();

function WageCalByRandom (min,max){
    return Math.floor(
        Math.random() * (max - min + 1) + min
    );
    }