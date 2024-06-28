//String Slicing ==>create a Substring from a portion of another string 
//string.slice(start,end);
let email = "fardeen8303@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);
console.log(username); 
console.log(extension)