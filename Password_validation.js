
// 1st and required method

let set_password = "pw-skills";

let password = "pw234";

let result = "";
if(set_password == password){
    result = "Password Matched. Password Validation Successful";
}
else{
    result = "Password didn't match. Password Validation Unsuccessful";
}
console.log(result);



// 2nd method for now; user id and password;

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   // User's sign-up details
//   const user_id = "BigBhabesh";
//   const password = "khul-jaa-sim-sim";
  
//   readline.question('Enter your user id: ', input_id => {
//     readline.question('Enter your password: ', input_password => {
//       if (user_id === input_id && password === input_password) {
//         console.log(`Password Matched. Password Validation Successful`);
//       } else {
//         console.log(`Password didn't match. Password Validation Unsuccessful`);
//       }
//       readline.close();
//     });
//   });


// 3rd method just to show;

// this has to be set by users 

// const user_id = "Pw_skills";
// const user_password = "pw123";

// // user gives input

// const input_id = "pw skills";
// const input_password = "pw234";

// const display = "user id or password didn't match.login failed";

// if(user_id == input_id && user_password == input_password){
//     display = "log in successful";
// }
// console.log(display);

  
  
  