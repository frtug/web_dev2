
// console.log(name) 

// var name = "ab";

//  THis example is hoisting......
// let firstname = "sha";


// function callMe(){
//     firstname = "abi";

//     console.log(firstname);

// }
// callMe()

// console.log(firstname)


// function addition(a,b){
//     return a%b;

// }


// arrow function 

// const subtration = (a,b)=>{
//     return a-b;
// }

// const subtration = (a,b)=> a-b

// let result = addition(8,5);
// console.log(result)

 
// console.log(addition(8,5))
// % modulas operator 

// + 
// - 
// / 
// *

// IIFE

// 0 .. . 10 9 .. . 0

// for (let i=0; i<=10; i++) {

//     console.log(i);
//     //  if (i <= 10){
//     //     console.log(i);
//     //  } 
//     // else {
//     //     console.log(20) ;
//     // }
// }


// let student1 = "Abhijith"
// let student2 = "Mahesha"
// let student3 = "Harish"
// let student4 = "Adithya"

let studentInfo = ["Adithya","Harish","Mahesha","Abhijith"]; // array 

// console.log(studentInfo[0])
// console.log(studentInfo[1])
// console.log(studentInfo[2])
// console.log(studentInfo[3])

studentInfo[studentInfo.length] = "Subash"

studentInfo.push("Varshini")

// console.log(studentInfo.pop())
 
// studentInfo.unshift("Varshini")

console.log(studentInfo.shift())



// unshit

console.log(studentInfo.length)

for(let i=0;i<studentInfo.length;i++){

    if(studentInfo[i] == "Mahesha"){
        // break;
        // continue;
        // console.log("Target Found",studentInfo[i])

    }
    console.log("index -",i,",", studentInfo[i], "Number -",i+1)
}


// console.log(3%5) 3/5 


// 2 - even
// 3 - odd 
// 4 - even

// 5%2 == 1

// create an array with the help of loop, add 10 values  in array 

// 2nd loop, check wether number is even or odd ... 

// index = 0, value = 1, odd/even



// Number Even or not 

// let list = []


// for (let i = 0; i < 10; i++) {
//   list.push(i);
//   if (i % 2 === 0) {
//     console.log(i + " is even");
//   } else {
//     console.log(i + " is odd");
//   }
// }

// console.log(list);


// for (let i = 0; i <= 20; i++) {
//     if (i <= 10) {
//       console.log(i); 
//     } else {
//       console.log(20 - i); 
//     }
//   }

// 0 10 
// 9 0 

// let inc = true;
// let i=0;
// let count = 0;
// while(count <= 20){

//     if(i == 10){
//         inc = false;
//     }
//     console.log(i)
//     if(inc ){
//         i++;
//     }
//     else i--;
//     count++; // count= count+1;
// }

// let i=0;
// let count = 0;
// while(true){
//     if(i == -1) break;

//     console.log(i)
//     if(count > 10){
//         i--;
//     }
//     else i++;

//     count++;
// }

// for (let i = 0; i <= 10; i++) {
//     let value = i + 1
//     if (value % 2 === 0) {
//         console.log(`Index ${i}: Value ${value} is even`);
//     } else {
//         console.log(`Index ${i}: Value ${value} is odd`);
//     }
// }

// let a = 2;
// let b = '2';


// console.log(a == b) // true 
// console.log(a === b) // false 

// console.log(typeof(a))
// console.log(typeof(b))

// let c = false;
// let d = 0;
// //  


// console.log(c == d) //  
// console.log(c === d) // 

// 
// let e = undefined;
// let f = null;


// console.log(e == f) // true  
// console.log(e === f) // false


// console.log(a == b) //


// let arr = [[20,"Harish"],[21,"Arun"],[19,"Aditiya"],[22,"Srivignesh"]]
// [
// [20,"Harish"]
// [21,"Arun"]
// [19,"Aditiya"]
// [22,"Srivignesh"]

// ]
// console.log(arr.length)
// console.log(arr[0].length)

// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr[i].length;j++){
//         console.log(arr[i][j]);
//     }
//     console.log("------------")
// }


// create a 2d array 
// 2 
// ["relationship ", "name "]
// ["friend","name"]










