// let username ="";
// while(username ==="")
//     {
//         username = window.prompt(`Enter Your Username`);
//     }
//     console.log(`Hello${username}`);
let isLogIn = false;
let username;
let password;
while (!isLogIn) {
    username = window.prompt("Enter Your UserName..");
    password = window.prompt("Enter Your Password..");
    if (username === "fardeen@gmail.com" && password === "myPassword") {
        isLogIn = true;
        console.log("Login Successfull");
    }
    else {
        console.log("Login Failled");
    }
}
// let isLogIn = true;

// do {
//     username = window.prompt("Enter Your UserName..");
//     password = window.prompt("Enter Your Password..");
//     if (username === "fardeen8303@gmail.com" && password === "Puranpur@123") {
//         isLogIn = true;
//         console.log("Login Successfull");
//     }
//     else {
//         console.log("Login Failled");
//     }
// }while(!isLogIn)