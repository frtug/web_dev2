
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

// let studentInfo = ["Adithya","Harish","Mahesha","Abhijith"]; // array 

// // console.log(studentInfo[0])
// // console.log(studentInfo[1])
// // console.log(studentInfo[2])
// // console.log(studentInfo[3])

// studentInfo[studentInfo.length] = "Subash"

// studentInfo.push("Varshini")

// // console.log(studentInfo.pop())
 
// // studentInfo.unshift("Varshini")

// console.log(studentInfo.shift())



// // unshit

// console.log(studentInfo.length)

// for(let i=0;i<studentInfo.length;i++){

//     if(studentInfo[i] == "Mahesha"){
//         // break;
//         // continue;
//         // console.log("Target Found",studentInfo[i])

//     }
//     console.log("index -",i,",", studentInfo[i], "Number -",i+1)
// }


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

// ["relationShip","name"],
// ["father","ROhan"]
// let rows = 4;

// let familyMembers = Array.from({length:rows},()=>Array(2).fill(null))

// let familyMembers = []

// for(let i=0;i<rows;i++){
//     familyMembers[i] = [];
//     for(let j=0;j<2;j++){
//         familyMembers[i][j] = "Hello Empty";
//     }

// }


// // 1st row
// familyMembers[0][0] = "RelationShip"
// familyMembers[0][1] = "Name"


// // 2nd row
// familyMembers[1][0] = "Father"
// familyMembers[1][1] = "Rohan"

// //3rd row 

// familyMembers[2][0] = "Mother"
// familyMembers[2][1] = "Meena"

// // 4th row  whose space is not assigned  
// familyMembers[3][0] = "Mother"
// familyMembers[3][1] = "Meena"

// for(let i=0;i<familyMembers.length;i++){
//     for(let j=0;j<familyMembers[i].length;j++){
//         console.log(familyMembers[i][j]);
//     }
//     console.log("------------")
// }

// console.log(familyMembers[0])

// console.log(familyMembers[0][0] + ":" + familyMembers[0][1]); 
// console.log(familyMembers[1][0] + ":" + familyMembers[1][1]);


// ["","",""]
//  Objects 
// {
//    key : value 
//    age : 23 
// }
// var student = {
//     name:"Arjun",
//     age:24,
//     Profession:"Student",
//     IsMature:true,
//     mark:{
//         aptitude:100,
//         domain:98,
//     }

// }
// student.gender = "male"

// student["height"] = "180cm"

// delete student.gender


// console.log(student.name)
// console.log(student.age)
// console.log(student.Profession)

// console.log(student.mark.communication)

// console.log(student.mark.domain)
// console.log(student.mark.aptitude)
// console.log(student.gender)

// console.log(student.height)



// var student = {
//     name: "Mary", 
//     age: 10, 
//     grades: {
//       quiz1: 90, 
//       quiz2: 88, 
//       quiz3: 95
//     }
//   }

// //   Use a bracket notation to access quiz2
// console.log(student["grades"]["quiz2"])

// // use Dot notation too
// console.log(student.grades.quiz2)


// console.log(student.grades["quiz2"])

// //  use mixture of both the notiation Maybe at first use dot and bracket at the later and vice versa
// console.log(student["grades"].quiz2)

// for( key in student){
//     console.log(key)

//     // console.log(student.key)
//     console.log(student[key])

// }

// Create an Object of Car where you are going to define its propeties like 

// color,price,isEv,millage,

// models{
//     model1:"xxxx2322"
//     model2:"xxxx2322"
//     model3:"xxxxx34343"

// }
// for (
//     // Access all those values by using a loop
// )

// var car = {
//     color:"Blue",
//     price : "8.5Lakh",
//     isEV:"NO",
//     millage:"20Km/L",
//     models:{
//         model1:"Swift VXI",
//         model2:"Swift LXI",
//         model3:"Swift ZXI"
//     }
// }
// for (key in car) {
//     // if(typeof(key) === )
//     if(typeof(car[key]) === "object"){
//         for(model in car[key]){
//             console.log(model, ":",car[key][model])
//         }
//     }
//     else console.log(key, ":",car[key])
// }

// console.log(car["models"])

// var student = {
//     name: "Mary", 
//     age: 10, 
//     grades: {
//       quiz1: 90, 
//       quiz2: 88, 
//       quiz3: 95
//     }
//   }



// create an object about yourself 

// 5 key values pairs, But it should include strings, numbers, boolean, null, {object 3 key pairs }
// array your marks in 12 {4-5 values}


// let aboutMe = {
//     name: "Adithya",
//     age: 21,
//     isMarried: false, 
//     occupation: null, 
//     education: {
//         tenthGrade: "A+", 
//         plusTwo: "A", 
//         degree: "Bachelor of computer application (8)" 
//     },
//     marks:[100,100,97,94]
// };




// let sum = 0;
// for(let i=0;i<aboutMe.marks.length;i++){
//     console.log(aboutMe.marks[i])
//     sum = sum+aboutMe.marks[i]
// }


// console.log(sum, ",Average = ",sum/aboutMe.marks.length)




// console.log(aboutMe) ;


// --------------------------------------------------------------------------
// let arr = [];

// console.log(typeof(arr))

// let students = [
//     {
//         name: "Adithya",
//         age: 21,
//         isMarried: false, 
//         occupation: null, 
//         education: {
//             tenthGrade: "A+", 
//             plusTwo: "A", 
//             degree: "Bachelor of computer application (8)" 
//         },
//         marks:[100,100,97,94]
//     },
//      {
//         name: "Harish",
//         age: 22,
//         isMarried: false, 
//         occupation: null, 
//         education: {
//             tenthGrade: "A++", 
//             plusTwo: "A", 
//             degree: "Bachelor " 
//         },
//         marks:[98,97,93,94]
//     }
// ]
// let store = []

// for(let i=0;i<students.length;i++){
//     // console.log(students[i].marks)
//     let marks = students[i].marks;
//     let sum = 0;

//     for(let j=0;j<marks.length;j++){
//         console.log(marks[j])
//         sum = sum+marks[j];
//     }
//     console.log(sum, sum/marks.length)
// }



// students.forEach((student)=>{
//     console.log(student.name)
//     let marks = student.marks
//     let sum = 0
//     let n = marks.length
//     marks.forEach(m)
//     console.log(sum, "Average",sum/n);
//     store.push(sum/n)
// })


// const arr = ["hello","hi","Bye"]

// create a loop with forEach accessing all the items and merging them togethar with '- '

// const arr = ["hello", "hi", "Bye"];
// let result = "";
// arr.forEach(item => {
// result += item + "-";
// });
// console.log(result);

// console.log(store)

// // Create an array where you are going to store all the averages 
// let store = [97.73,100]

// console.log(typeof(students))

// const arr = ["hello", "hi", "bye"]; 
// let newarr = ""; 
// arr.forEach(( a, index) => {
//     if(index == arr.length-1 ){
//         newarr = newarr + a; 
//     }
//     else newarr = newarr+ a + '-'
// });
// console.log( newarr);


// const arr = ["hello","hi","Bye"]
// let newArray = "";
// arr.forEach((item,i) => {
// newArray += item + '-';
// });
// console.log(newArray);

// ----------------------------------------------------

// Patterns

// *****
// *****
// *****
// *****
// *****
// for(let i=5;i>0;i--){
//     let row = ""
//     for(let j=0;j<i;j++){
//         row += "* ";
//     }
//     console.log(row)
// }



// // *
// // * *
// // * * *
// // * * * *
// // * * * * *

// // * * * * * 
// // * * * * 
// // * * * 
// // * * 
// // * 

// //     *       (2n - 1) 1 to 5 
// //    ***
// //   *****
// //  *******
// //*********


// //     *        
// //    ***
// //   *****
// //  *******
// // *********
// //  *******
// //   *****
// //    ***
// //     *



// let arr_obj = [
//     {
//         name:"H",
//         age:22,
//         marks:[12,34,45],
//         friends:{
//             friend1: "Y",
//             friend2: "X"

//         }
//     },
//     {
//         name:"A",
//         age:23,
//         marks:[32,12,32],   // find the sum and then later average
//         friends:{
//             friend1: "Q",   // you are going to concatinate all the name of the friends with , Q,W
//             friend2: "W"
//         }
//     }
// ]
// console.log(typeof(arr_obj))
// let arr_avg;
// arr_obj.forEach((student)=>{
//     // console.log(student)
//     for(key in student){
//         // console.log(key, student[key])
//         let sum = 0;
//         let friend = "";
//         let property = student[key];
//         if(typeof(property) === "object" ){
//             if(Array.isArray(property)){
//                 property.forEach((mark) => sum += mark)
//                 console.log(sum, "Average =", sum/property.length)
//                 arr_avg = sum/property.length
//             }
//             else {
//                for(k in property){
//                 friend += property[k]+","
//                }
//                console.log(friend)
//             }
//         }
//         else {
//              console.log(key, student[key])

//         }
        
//     }



// })

// console.log(arr_avg)


// var sum = function(x,y){return x+y}
// var multi = function(x,y){return x*y}
// var divide = function(x,y){return x/y}
// var subtract = function(x,y){return x-y}
// var modulo = function(x,y){return x%y}

// // let a = function (a,b){
// //     return a+b;
// // }
// // console.log(a(4,2))

// var operations = [sum,multi,divide,subtract];

// for(var i=0;i<operations.length;i++){
//     console.log(operations[i](4,6))
// }

// var operations1 = [sum,multi,divide,subtract,modulo];

// for(var i=0;i<operations1.length;i++){
//     console.log(operations1[i](4,6))
// }



// var student ={
//     name:"Vignesh",
//     age:"22"
// }
// var student2 ={
//     name:"Subash",
//     age:"21"
// }

// var createStudent = function(name,age){
//     var student = {
//         name:name,
//         age:age,
//         birthday: function(){
//             this.age = this.age + 1;
//         }
//     }
//     return student;
// }
// var student1 = createStudent("Vignesh",22)
// var student2 = createStudent("Subash",21)


// var Student = function(name,age){
//     this.name = name;
//     this.age = age;
//     this.birthday = function (){
//         this.age++;
//     }
// }

// var student_special = new Student("aa",23)


// console.log(student_special)

// student_special.birthday()

// console.log(student_special)

// Pallendrome  saas = saas roor 

// Write  a function to check whether a string is a pallendrome or not. return a  msg saying "its pallendrome " or "its not pallendrome"
// function isPallendrome(st){
// //  write a logic here
//     // saas 
//     // st[st.length -1] to st[0]
//     // ss += st[i]
//     let rev = "";
//     for(let i=st.length-1;i>=0;i--){
//         rev += st[i];
//     }
//     if(rev === st) return true
//     return false

//     // return rev === st


// }
// isPallendrome("saas")

// 2nd approach 
// function isPallendrome(st){
//     let rev = st.split("").reverse().join("")

//     return (rev === st) ?  true :  false;   //  
// }


function isPallendrome(st){
    let i = 0; //first character
    let j = st.length-1; // last character 

    // if(st[i] == st[j] )//its a potential pallendrone 
    while(i < j){
        if(st[i] !== st[j]) return false;
        i++;
        j--;
    }

    return true;
}

// 




if(isPallendrome("saat")) console.log("Its Pallendrome")
else console.log("not a pallendrome")

//-------------------------

function factorial(n){
    if(n < 0) return -1;
    if(n == 0) return 1;
    let fact = 1;
    for(let i=n;i>=1;i--){
        fact *= i;
    }
    return fact;
}
console.log(factorial())

// 1st problem 

function calculateFact(arr){
//  loop 
 let a = [];

    return a
}
let arr=[1,2,3,4,5,35,64]
calculateFact(arr) //return a array which has all the factorial of the existing array numbers.  

// write a function which will search in the array and find out the seached item with return of its index


// ---- 2nd problem
function search(arr,target){
// code here 
}

let res = search(["saas","tass","toss","paas"],"tass")

console.log(res) // index of the target 

// ---------3rd 
function checkPallen(arr){
//  RETURN A ARRAY WITH TRUE FALSE BY CHECKING IF YOUR STRING IS PALLENDROME OR NOT
}
let p_arr = ["SooS","saas",]

checkPallen(p_arr)


// factorial  5! ->  5*4*3*2*1
    // 10! -> 10*9.... *1
// searching ,
// a number is a pallendrome  10001
// sorting function 
// rotate an array 

// var i,j,k;
// for(let i =1; i<=10;i++){
//   for(let j=1;j<=(10-i);j++){
//     document.write("&nbsp;")
//   }
//   for(let k=1;k<=i;k++){
//     document.write("* ");
//   }
//   document.write("<br/>")
// }

            // 1 to 5
//      *      // 2(n)-1  n = 1 to rows
//    * * *
//  * * * * *
// * * * * * * *
// let rows = 5
// for(let i=0;i<rows;i++){
//     let row = ""; 
//     for(let j=rows;j>i+1;j--){   // j=[5 to 2]  -> 4 times
//         row += " "
//     }
   
//     for(let j=0;j<2*(i+1)-1;j++){
//         row += "*"
//     }

//     console.log(row)
// }
















