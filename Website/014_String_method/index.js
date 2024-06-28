//String method Allow you to manipulate and work with text(String)
 let username  = "Fardeen";
 console.log(username.charAt(0));
 console.log(username.indexOf("F"));
 console.log(username.lastIndexOf("n"));
 //you can explore by your self..
 console.log(username.slice(1,5));
 console.log(username.substring(1,5));//same
 console.log(username.substring(-5));//you can doit by this also
username =username.padStart(14,"0");
 console.log(username);
 let USERNAME2 = "fARDEEN KHAN ";
  USERNAME2 = USERNAME2.slice(0,USERNAME2.indexOf(" "));
  console.log(USERNAME2);