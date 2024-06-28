// let rand ;
// rand= Math.floor(Math.random()*10 )+1;
// console.log(rand);
const mylabel = document.getElementById("mylabel");
const mybutton =document.getElementById("mybutton");
const min =1;
const max =6;
let rand;
mybutton.onclick =function()
{
    rand = Math.floor(Math.random() *max)+min;
    mylabel.textContent = rand;
}