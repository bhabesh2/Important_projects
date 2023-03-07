

let user_name = "hitesh";

//👇 check the first letter is it a uppercase if not change it to uppercase and return the string 

user_name = (user_name.charAt(0) == user_name.charAt(0).toUpperCase())? user_name: user_name.charAt(0).toUpperCase() + user_name.slice(1);

console.log(user_name); // "Hitesh";

