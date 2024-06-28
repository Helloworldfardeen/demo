const subButton = document.getElementById("subcribeButton");
const rupayButton = document.getElementById("rupayButton");
const visaButton = document.getElementById("visaButton");
const mastercardButton = document.getElementById("mastercardButton");
const paypalButton = document.getElementById("paypalButton");
const mysubmit = document.getElementById("mysubmit");
const subresult = document.getElementById("mypara");
const paymentresult = document.getElementById("myparaP");
mysubmit.onclick = function () {
    if (subButton.checked) {
        subresult.textContent = "You are Subcribed";
    }
    else {
        subresult.textContent = "You are Not Subcribed";
    }
    if (rupayButton.checked) {
        paymentresult.textContent = "Rupay...";
    }
    else if (visaButton.checked) {
        paymentresult.textContent = "Visa";
    }
    
    else if (mastercardButton.checked) {
        paymentresult.textContent = "Master Card";
    }
    
    else if (paypalButton.checked) {
        paymentresult.textContent = "PayPal";
    }
    else{
        paymentresult.textContent ="Not Selected";
    }


}
