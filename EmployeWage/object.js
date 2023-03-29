//defining object
let person = {
    First_Name : "Shital",
    Last_Name : "Karad",

    getFunction : function(){
        return (`The Name of the person is
        ${person.First_Name} ${person.Last_Name}`)
    },
    Phone_Num :{
        mobile_Number :"9022357801",
        Lanline : "2313",
    }
}
console.log(person.getFunction());
console.log(person. Phone_Num.Lanline);