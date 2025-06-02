//JavaScript Operator//-------

/*
JavaScript Operator 5 type:
1.Arithmetic Operator
2.Comparison Operator
3.Logical Operator
4.Assignment Operator 
5.Conditional Operator
*/

//******Arithmetic Operator*******//---------
const a = 50;
const b = 30;
console.log(a+b); //Addition//

const c = 50;
const d = 20;
console.log(c-d); //Subtraction//

const e = 20;
const f = 30;
console.log(e*f); //Multiplication//

const x = 20;
const y = 30;
console.log(x+y**2); //Exponentiation(ES6)

const g = 30;
const h = 15;
console.log(g/h); //Division//

const i = 50;
const j = 30;
console.log(i%j); //Modulus(Remainder)

let k = 20;
k = k + 1;
k++  //Increment//
console.log(k);

let l = 20;
l = l - 1;
l--  //Decrement//
console.log(l);

//Operator Precedence//-------------
/**
 * first()
 * secend{}
 * thirth[]
 */

//*******Comparison Operator*******//--------
let m = 10;
let n = 20;
console.log(m==n); //eqal to//
console.log(m===n); //eqal valu and eqal type//
console.log(m!==n); //not eqal valu or not eqal type//
console.log(m>n); //Greater than//
console.log(m<n); //Less than//
console.log(m>=n); //Greater than eqal to//
console.log(m<=n); //Less than eqal to//

//*****Logical Operator****//-------


//(&&)And Operator//
const o = true;
const p = true;
console.log(o&&p);
const q = true; 
const r = false;
console.log(q&&r);
const s = false;
const t = false;
console.log(s&&t);
//(||)Or OPerator
const u = false;
const v = false;
console.log(u||v);
const w = false;
const z = true;
console.log(w||z);
const a1 = true;
const a2 = true;
console.log(a1||a2);
//(!)Not Operator//
const b1 = 20;
const b2 = 10;
console.log(!(b1<b2));

//******Assignment Operator******//----------
let c1 = 20;
let c2 = 10;
c1 =c1+c2; //same(c1 +=c2)//
console.log(c1);
let d1 = 30;
let d2 = 20;
d1 =d1-d2; //same(d1 -=d2)//
console.log(d1) 
d1 = d1*d2; //same(d1 *=d2)//
console.log(d1) 
d1 = d1**d2; //same(d1 **=d2)//
console.log(d1) 
d1 = d1/d2; //same(d1 /=d2)//
console.log(d1) 
d1 = d1%d2; //same(d1 %=d2)//
console.log(d1) 

//******Conditional Operator*****//-----------
let e1 = 20;
let e2 = 10;
let e3 = e1<e2? "True":"False"
console.log(e3);

let f1 = 20;
let f2 = 10;
let f3 = f1>f2? "True":"False"
console.log(f3);

//(if and else)//-----
if (f1<f2) {console.log("True");}
else{console.log("False");}

if (f1>f2){console.log("True");}
else{console.log(False);}

//typeof Operator//----
let g1 ="Alok";
console.log(typeof g1); //string//

let g2 = 23;
console.log(typeof g2); //number//

let h1 = 20;
let h2 = 30;
let g3 =h1>h2 ? true:false;
console.log(typeof g3); //boolean//
