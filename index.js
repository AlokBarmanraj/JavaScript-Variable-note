// variable//

var a = 10;   //var variable//
var a = 20;   //var re declare//
var a = "bangladesh";  //var re assaign//
{
    var fruit = "mango";
    console.log(a);
}
 console.log(fruit); //global scooped//
console.log(vagitable);// var hosted//
var vagitable =
console.log(a);


let b = 30;  //let variable//
//let b = 40   // !let can not re declare//
b = 50;   //let re assaign//

    let vlock = 40; //block scooped// 
{
    console.log(vlock);
}
//!let can not hosted//
console.log(b);




const c = 40;  //const variable//
//const c = 50; //!const can not re declare//
// c = 60; //!const can not re assaign//
{
    const total = 45;   //block scooped//
    console.log(total);
}
//!const can not hosted//
console.log(c);
const person = {
    firstName:'Alok', lastName:'Barman',
     age:20,
};
person.country='Bangladesh';
person.age = 23;
console.log(person);


