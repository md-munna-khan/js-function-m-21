function items(number){
    const items = number * 2;
    console.log(number,items)
}
console.log( "i will call the fish item")
items(20)
console.log("----------------------")
items(10)
const number = 30;
items(number);


function age(age1,age2){
    const diff = age1-age2;
    console.log(age1,age2 ,'difference is',diff)
}
const fatherAge =50;
const myAge = 22;
age(fatherAge,myAge)