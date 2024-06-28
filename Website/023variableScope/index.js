//Variable scope ==>
    // where variable is recognize and accessble (local vs global)
let x = 1;
function fun1()
{
    let x = 2;
    console.log(x); // 2
}
function fun2()
{
    let x = 3;
    console.log(x); // 3
}
fun1();//local varable is higer priority
fun2();
