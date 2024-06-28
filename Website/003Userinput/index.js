
//userInput in javascript
/* 
1)Easy way = window promt
2)professional way = HTMl text box

*/
// one ways easy ways
// let userinput = window.prompt("Enter your name");
// console.log(userinput);
//another ways is to 
// professional way
let username;
document.getElementById("submit").onclick = function()
{
   username = document.getElementById("usernameid").value;
   document.getElementById("myh1").textContent=`Hello Bro ${username}`;
}
/////////////////////////////////////////////////////////////////////////////////////
//Type converion another topic so 
// changing the datatype value to another dataType(string,boolean,number)
let  forcheck = window.prompt("Enter your Age brother!!!");
//after the type casting or type conversion 
forcheck = Number(forcheck);//play with appling diffrent different cases
forcheck += 1;
// forcheck = Number(forcheck);
console.log(forcheck ,typeof (forcheck));// it will the wrong value why becoz it pass a sting
let a ="Fardeen"; 
let b ="Fardeen"; 
let c ="Fardeen"; 
a = Number(a);
b=  String(b);
c = Boolean(c);
console.log(a);
console.log(b);
console.log(c);




