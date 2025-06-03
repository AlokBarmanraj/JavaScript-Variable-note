//JavaScript Variable//----

/*
 * JavaScript variable names are Case-Sensitive
 * Variable names cannot contain spaces
 * Variableb cannot be the same as reserved 
   keywords such as 'if' or 'const'.
 * By convention, JavaScript variablen names 
   are  written in camelcase
 * Varianle should be given description names 
   that indicate their content and usage (e.g. 
   'sellingprice' and 'costprice' rather than 
   'x' and 'y')
 * you can not add number first variable name
 * _,$ is accaptable but try to avoid


Variable type 3:
1.var
2.let
3.const
*/

//******var*****//-----
var a = 20;  //var Variable//
var a = 30;  //var re-declare//
var a = 'Bangladesh';  //var re-assaign//
console.log(a);
{
    var block = 40;
}
console.log(block); //var Global//

console.log(b); //var hosted//
var b =50;

//*****let*****//---------
let c = 30; //let variable//
// let c = 40; //!let can not re-declare//
c = 40; //let re-assaign//
console.log(c);

 {
     let number = 70;
     console.log(number); //let block scoped//
 }

/*
console.log(country);
let country = 'bangladesh' // !let can not hosted// 
*/

//*****const****//----------
const d = 50; //const variable//
// const d = 60; //!const an not re-declare//
//d = 70; //!const can not re-assaign//
console.log(d);
{
    const e = 40;
    console.log(e); // const block scope//
}
/*
console.log(people); //!const can not hosted//
const = 30;
*/
const infomation = {
    firstName : 'Alok', lastName : 'Barman',
    age : 20,
}
infomation.country = 'Bangladesh'
infomation.age = 21;
console.log(infomation);