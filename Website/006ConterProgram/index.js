const increBu=document.getElementById("increB");
const resetBu=document.getElementById("resetB");
const decreBu=document.getElementById("decreB");
const conterlaber = document.getElementById("countLabel");

let conter =0;
increBu.onclick = function()
{
    conter++;
    conterlaber.textContent = conter;
}
decreBu.onclick = function()
{
    conter--;
    conterlaber.textContent = conter;
}
resetBu.onclick = function()
{
    conter=0;
    conterlaber.textContent = conter;
}