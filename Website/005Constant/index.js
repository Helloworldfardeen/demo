// constant isthe variable name that cannot be change...
const PI = 3.147860;
// PI = 420.69; we cant not change
let radius;
let area;
document.getElementById("msubmit").onclick=function()
{
    radius = document.getElementById("radius").value;
    radius =Number(radius);
    area = PI * radius * radius;
    document.getElementById("myh2").textContent = "The area of the circle is " + area;

}