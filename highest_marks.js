// required one 
let marks = [345,234,543,234,342];

let maxNumber = -Infinity;

for(let i = 0; i < marks.length; i++){
    maxNumber = (marks[i] > maxNumber) ? marks[i] : maxNumber; 
}
console.log(`the highest marks of any student : ${maxNumber}`);

// const highestMarks = ((std,marks) =>{
//     let max = -Infinity, name = "";
//     for(let i = 0; i < marks.length; i++){
//         if(marks[i] > max){
//             max = marks[i];
//             name = std[i];
//         }
//     }
//     console.log(`name:${name} marks:${max}`);
// })

// let std = ["raju","hitesh","avishek","monali","bhabesh"];

// let marks = [235,354,243,544,237];

// highestMarks(std,marks);

