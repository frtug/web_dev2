
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
//             degree: "Bachelor of computer application (8) " 
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


// function isPallendrome(st){
//     let i = 0; //first character
//     let j = st.length-1; // last character 

//     // if(st[i] == st[j] )//its a potential pallendrone 
//     while(i < j){
//         if(st[i] !== st[j]) return false;
//         i++;
//         j--;
//     }

//     return true;
// }

// // 




// if(isPallendrome("saat")) console.log("Its Pallendrome")
// else console.log("not a pallendrome")

// //-------------------------

// function factorial(n){
//     if(n < 0) return -1;
//     if(n == 0) return 1;
//     let fact = 1;
//     for(let i=n;i>=1;i--){
//         fact *= i;
//     }
//     return fact;
// }
// console.log(factorial())

// // 1st problem 

// function calculateFact(arr){
// //  loop 
//  let a = [];

//     return a
// }
// let arr=[1,2,3,4,5,35,64]
// calculateFact(arr) //return a array which has all the factorial of the existing array numbers.  

// // write a function which will search in the array and find out the seached item with return of its index


// // ---- 2nd problem
// function search(arr,target){
// // code here 
// }

// let res = search(["saas","tass","toss","paas"],"tass")

// console.log(res) // index of the target 

// // ---------3rd 
// function checkPallen(arr){
// //  RETURN A ARRAY WITH TRUE FALSE BY CHECKING IF YOUR STRING IS PALLENDROME OR NOT
// }
// let p_arr = ["SooS","saas",]

// checkPallen(p_arr)


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

// vignesh

// function factorial(n){
//     if(n<0) return -1;
//     if(n==0) return 1;
//     let fact = 1;
//     for( let i =n;i>=1;i--){
//       fact *= i;
//     }
//     return fact;
//   }
//   function CalculateFact(arr){
//     return arr.map(factorial)
//   }
  
//   let numbers = [3,6,9,12,15]
//   let factorials = CalculateFact(numbers);
//   console.log(factorials);


//   console.log(search(myArray, 11));


  
//   console.log(search(myArray, 11));
  // paliandrome or not
  
//   let p_arr = ["soos", "saas", "malayalam", "kannada","Eglish"];
//   function check(arr) {
//       let checkedArray = [];
//       for (let i = 0; i <arr.length; i++) {
//           let str = arr[i];
//           let reversed = str.split('').reverse().join(''); 
//           checkedArray[i] = (str === reversed); 
//       }
//       return checkedArray;
//   }
  
//   console.log(check(p_arr));

//   console.log(search(myArray, 11));

//   let myArray = [3,6,9,15,43,14]

//   function search(arr, target) {
//     let a = [];
//       for (let i = 0; i <arr.length; i++) {
//           if (arr[i] === target) {
//               a.push(i)
//           }
//         } 
//          if(a.length === 0) return -1;
//          return a;

//   }
//     console.log(search(myArray, 11));


// console.log(Math.round(Math.random()*5))


    // function checkPalindromes(strings) {
    //     return strings.map(str => {return str === str.split('').reverse().join('');
    //     });
    // }
    
    // const strings = ["madam", "hello", "racecar", "malayalam", "not a palindrome"];
    // const results = checkPalindromes(strings);
    // console.log(results);

// prime number 

// 1 and itself

// 2,3,5,7,11 ...


// function isPrime(n){
//     if(n <= 1) return false;
//     for(let i=2;i<=Math.sqrt(n);i++){
//         if(n%i == 0 ) return false;
//     }
//     return true;
// }
// let n = 11;
// if(isPrime(n)){
//     console.log(n, "is prime ")
// }
// else console.log(n,"not a prime number")

// console.log(Math.sqrt(n))

// function sum_arr(arr){
//     console.log(arr)
//     let sum = 0;
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i];
//     }
//     return sum;
// }

// function randomValues(n){
//     return Math.round(Math.random()*n)
// }

// function Generate_values(n){
//     let a =[];
//     for(let i=0;i<n;i++){
//         a.push(randomValues(n))
//     }
//     console.log(a,a.length)
//     return sum_arr(a)
// }
// console.log(Generate_values(100))



// Create a prime Function which will find all the prime numbers from 1 to 100.  
// function isPrime(n){
//     if(n<=1) return false;
//     for(let i=2;i<=Math.sqrt(n);i++){
//       if(n%i ==0 ) return false;
//     }
//     return true;
//   }
  
//   function firstNPrimes(number) {
//       const primes = [];
//      for(let n =1;n<=number;n++){
//           if (isPrime(n)) {
//               primes.push(n);
//           }
//       }
//       return primes;
//   }
//   const first100Primes = firstNPrimes(200);
//    console.log(first100Primes);


//    function findPrimes(n) {
//     let primes = [];
//     for (let i=2; i <= n; i++) { 
//         let isPrime = true;
//         for (let j = 2; j <= Math.sqrt(i); j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//             }
//         }
//         if (isPrime) {
//             primes.push(i);
//             }
//     }
//     return primes;
//     }
//     console.log(findPrimes(100));
    

// LCM HCF 

// create a list of 200 naturals number [] 1 to   200 


// Character count: Count the occurrences of a target in a string "sjfsjfklsja "
// function countCharacter (str, target) {
//     let count = 0;
//     for (let i=0; i < str.length; i++) {
//         if (str[i] === target) {
//             count++;
//         }
//     }
//     return count;
// }

// console.log(countCharacter("reverse","e"))



// Try creating a reverse of a number 134242   242431


// let n = 134; //  100 + 30 + 4
// //     4*100+3*10+1*1
// // 431 -> 400+30+1
// function reverseANumber(n){
//     // write code for reverse a number 

//     let rev_num = 0;
//     // console.log(Math.round(n/10))
//     while(n > 0){
//         let remainder =  n % 10;  // 4 -> 3  -> 1
//         rev_num = rev_num*10 + remainder;  //0 +4 -> 4*10 + 3 -> 43*10 +1 =
//         n = Math.round(n/10);   // n = 13 -> 1 -> 0
//     }
//     return rev_num; //431
// }
// console.log(reverseANumber(n)) 

// const a = n.toString().split('').reverse().join('');
// console.log(typeof(parseInt(a)))

// Create a function which will Calculate a digits of a number, you can't use inbuild functions or anything.

// let n = 232442

// // console.log(n.toString().length)
// function digitCount(n){

//     let count = 0;
//     while(n > 0){
//         n = Math.round(n/10);
//         count++;
//     }
//     return count; //431
// }
// console.log(digitCount(n))


// LCM -> Least common Multiple 

// (2,2) -> 10  2,5

// (2,5) <= a*b 
// (1,5) <= a*b 

// calaculate the maximum and minimum of two numbers

// function maxMin(a,b){
//     if(a > b){
//         console.log(a,"is the greater value ")
//     }
//     else console.log(b,"b is greater or equal to a ")
// }
// console.log(maxMin(2,5))

// console.log(Math.max(2,5))
// console.log(Math.min(2,5))

// function lcm(a,b){
//     let ma = Math.max(a,b)
//     let mi = Math.min(a,b)

//     for(let i=ma;i<=a*b;i=i+ma){
//         if(i % mi === 0){
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(lcm(7,5))


// "reverse"
// r : 2
// e : 3
// v : 1
// s:  1
 
// create a char count store in an array or object 



// for(char in str) {
// // if (charCount[char]) {
// //     charCount[char]++;
// // } else {
// //     charCount[char] = 1;
// // }
// console.log(char)
// }

// const ob = {};
// for(let i=0;i<str.length;i++) {
//   console.log(str[i])
//   if(ob[str[i]])
//     ob[str[i]]++; 
//   else ob[str[i]] = 1;
// }
// console.log(ob)


// let 

// store all the lowercase characters 
// a b c ... z -> 0 1 2 3 4 5 25 
// 26


// let arr = [];

// const str = "hello world";

// const arr = [];
// const str = "hello world";

// for(let i=0;i<25;i++){
//   arr[i] = 0;
// }
// let con = 97;

// for(let i=0;i<str.length;i++){
//   // console.log(str[i])
//   if(str.charCodeAt(i) != 32)
//     arr[str.charCodeAt(i)-con]++;
//   // arr[i] = arr[i]++;
// }
// console.log(arr)
// for(let i=0;i<arr.length;i++){
//   if(arr[i] != 0){
//     console.log(String.fromCharCode(i+con),arr[i])
//   }
// }


// for(let i=0;i<str.length;i++){
//     console.log(arr[str.charCodeAt(i)-con],str[i])
  
// }
// console.log(arr)

// conditions 

// || -> or { 1  0  -> 1
// 0 1 1

// 1 1 1 
// 0 0 0
// }

// && -> AND 
// 1 && 1 
// Logic gates  -> 
// function sum(a,b) {
//   console.log(a+b);
// }

// create a program which will create a diamond pattern with just star as a outline 

// 0 1 3 5 7 9 11  (2n-1) n = 0 -> -1 , n=1 -> 1, n=2 -> 3 , 5 ,7,9 ,11
// ----*
// ---*-*
// --*---*
// -*-----*
// *-------*

// -*-----*
// --*---*
// ---*-*
// ----*


// let rows = 5;

// for(let i=1;i<=rows;i++){
//   let row = ""
//   // for(let j=0;j<rows-i;j++){
//   //   row += "-";
//   // }
//   for(let j=rows-i;j>0;j--){
//     row += " ";
//   }
//   row += '*';
//   if(i != 1){
//     // 2n-1
//     for(let j=0;j<2*(i-1)-1;j++){
//       row +=" ";
//     }
//     row += "*";
//   }

//   console.log(row)
// }













  // a = a+1;
// console.log(a++)  //post increment   0
// console.log(++b)  //pre increment    1

// console.log(sum(a,b))



// if(0){
//   console.log("zero")

// }
// else {
//   console.log("not zero")
// }

// let a = 0;
// let b  = 0;
// if ( (++a && b++ ) || a == 2){ 
//   console.log("Hello",a) 
// }
// else if (b == 1){
//   console.log("b is 2 here ")
// }
// else {
//   console.log("else where ",a)
// }
// let a = 1;

// switch(a){
//   case 0:
//   case 1:
//     console.log("zero one",a);
//     break;
  
//   case 2:
//     console.log("one",a);
//     break;
//   default:
//     console.log("All values other than 0 to 2")
// }

// function add(a,b){
//   return parseInt(a)+parseInt(b)
// }
// function custom_eval(str){
//   let total = 0;
//   for(let i=0;i<str.length;i++){
//     if(i == 0) total = str[i];
//     if(str[i] == "+"){
//       total = add(total,str[i+1]);
//     }
//   }
//   console.log(total)
// }

// custom_eval("4+5+9+8+10")


// let i = 10 ;

// console.log(i ** 2)

// console.log(i)

// console.log(Math.pow(10,2))

// console.log(i **= 2)

// console.log(i)


// ==
// ===

// != // not checking any type
// !==  // checking type as well with value


// (condition) ? true : false
// i === 100 && i >= 0 ? console.log("i is ", i) : console.log("i is not ", i)


// logical operators 
// &&
// || 

// let a = "hello"
// if(!(a.length > 2)){
//   console.log("I am true")
// }
// if(!(a.length > 7)){
//   console.log("I am false")

// }

// 101010
// // 1 byte = 8bits 

// 101010101010101010100.. to 32bits numbers


// & And 
// | or 
// ~ NOT
// ^  XOR  1 0 -> 1 or 0 1 -> 1 else those cases it will give 0
//  0, 0 -> 0, 1, 1 -> 1
// let i = 12  // 1100 -> 0110
// let j = 10  //  1010   00000000 00000000 00000000 00001010 
// let and = i & j //  0100
// let or = i | j //  1101

// let not = ~j // 0101   11111111 11111111 11111111 11110101 -> second's complement operation -> -(00000000 00000000 00000000 00001010 + 1)  0+1 -> 1 -> 0000000 1011

// console.log(not)
// let xor = i ^ j; // 1 0 0 1


// let leftShift = i << 1 // 00000000 00000000 00000000 0001100  -> 00000000 00000000 00000000 00011000 -> 16+8
// //
// let right = i >>> 1 // 00000000 00000000 00000000 0001100  -> 00000000 00000000 00000000 00000110 -> 

// console.log("and",i,j,"->", and)

// console.log("or",i,j,"->", or)

// console.log(not)
// console.log(xor)

// console.log("leftshift",leftShift)
// console.log("right",right)

// let a = "hello "
// let b = 1;
// console.log(a) 
// try {
// //   //  sever data callling or fetching. Your server is going 
//     eval("alert('Hello)");
//     // if(b.toUpperCase()) throw "Its a number"
//     // if(a.trim() == "hello") throw "String matched with our a" 
//  }
// catch(err){
//   console.log("err","error coming in the block",)
// }

// let ageError = new Error("Age cannot be zero ")
// let ourOfArray = new Error("Trying to access value outside the array length")
// // console.log(customError)
// let i = [12,13,14]
// try{
//   let age=0;
//   console.log(age)
//   let index = 3
//   if(index > i.length-1 ){
//     throw ourOfArray;
//   }
//   if(age == 0) throw ageError

// }
// catch(err){
//   console.log("Error found here",err)
// }
// let p = 3
// console.log(p.toPrecision(500));
  // console.lo(a)

//  Home work for monday 1 Dec 
  // console.log("/")
  // console.log("\")
      // ________
      // \      /
      //  \    /
      //   \  /
      //    \/

      // TODO APP 

      // input <user can write some text and that get added when someone clicked on add button 

      // add button 

      // number name date 
      // Table create a list of of all the items 
  

// binary number to decimal number

// 0011 -> function binaryConversion -> 3

// function binaryConversion(binary){
//   let decimal = 0
//   for(let i=0;i<binary.length;i++){
//     // console.log(typeof(binary[binary.length-i-1]))
//     decimal = decimal +  parseInt(binary[i]) * Math.pow(2,binary.length-1-i) // computation to find the number which will be generated by that bit
//     console.log(typeof(decimal))
//   }
//   console.log(decimal)
//   return 0
// }
// binaryConversion("0011")    // 1*2^0 + 0+ 1*2^2 + 0 +1*2^4


// binary to digit 
// number & number 



// function decimalConversion(decimal){
//   let str="";
//   while(decimal > 0){
//       let rem = decimal % 2; 
//       // str += rem;
//       str =  rem+str;
     
//       decimal = Math.floor(decimal/2)
//     }
//    console.log(str)
// }
// decimalConversion(6)  // 110


// 2^0*0 +2^1 +2^2 +2^3


// //  decimal number to binary number 

// // 3 -> function() decimalCon -> 11
// 16+8+4+2+1

// let i=0;

// console.log("i am here with i",i)

// setTimeout(()=>{
//   console.log("I am first")
// },0)

// setTimeout(()=>{
//   console.log("I am second")
// },0)

// console.log("i am here second  i",i)



// points = [2,3,1,4,5,6,71,34,25]


// points.sort(function(a, b){return b-a});

// console.log(points)

// ----------

// function binaryTodecimal(bin){
//   let digit = 0;

//   // write code to make a conversion from binary to decimal but both number as a type. 

//   return digit
// }


// binaryTodecimal(1000)

// 


// recusion
// add sum of 100 elements sn 

// recursion(n) -> n + recursion(n-1)


// function recursion(n){

//   // terminating statement
//   if(n == 0 || n == 1) return n;
//   let current_num = n;
//   return current_num + recursion(n-1);

// }

// factorial of number 


// function rec_factorial(n){
//   if(n == 0 || n == 1) return 1;
//   return 5 * rec_factorial(n-1);
// }

// console.log(rec_factorial(5))


// string is palendrome or not


// jiij -> j j , iii


// function palendromeChecker(str){
//     if(str.length == 0 || str.length == 1){
//       return true
//     }
//     if(str[0] === str[str.length-1]){
//       return palendromeChecker(str.substring(1,str.length-1))
//     }
//     return false;



// }
// if(palendromeChecker("jdij")) console.log("is palendrome")
// else console.log("not a palendrome")




// function rec_decimalConversion(decimal){

//   // let str="";
//   // while(decimal > 0){
//   //     let rem = decimal % 2; 
//   //     // str += rem;
//   //     str =  rem+str;
     
//   //     decimal = Math.floor(decimal/2)
//   //   }
//   //  console.log(str)
// }
// rec_decimalConversion(6)  // 110


// let i = "Hello World"

// console.log(recursion(100))


//-----------4 dec

// find a palendrome of a number 

// 1010123
// function pal_num(n){
//   let rev = 0;
//   let orginal = n;
//   while(n > 0){
//     let r = n %10; 
//     rev  = rev*10 + r;
//     n = Math.floor(n/10)
//   }
//   console.log("rev = ",rev)
//   console.log("orginal = ",orginal)
//   return orginal === rev

// }
// console.log(pal_num(123))


// binary to decimal 
// binrary number and decimal number 


// function binaryTodecimal(num){
//   let res = 0
//   let p = 0;
//   while(num> 0){
//     let r = num % 10;
//     res +=  r*Math.pow(2,p)
//     num = Math.floor(num/10)
//     p++;

//   }
//   return res

// }

// console.log(binaryTodecimal(10101))

// function expression
// function callMe(){
//   let i =0;
//   function hello(){
//     return "hello Call me"+i;
//   }
//   return hello()

// }

// console.log(callMe())

// {
//   let i = 0;

// }
// {
//   var j = 2; 

// }

// for(var j=0;j<5;j++){
//   console.log(j)
// }
// console.log(j)

// function hello(...args){
//   // console.log(arguments)
//   // console.log(Array.from(arguments))
//   console.log(args)
//   // var j=0;
//   // console.log(j)
// }
// // console.log(j)
// hello(2,4,5)

// let arr = [1,2,3,4,5]


// let ar = [...arr ] 

// let obj = {a:1,b:2};

// const clone_shallow = {...obj,c:3};

// console.log(clone_shallow)


// function returnTwo(){
//   // code here 
//   return [1,4]
// }


// let [i,j] = returnTwo();

// console.log(i,j)

// (IIFE)


// (function(){
//   console.log("hello I am IIFE Function")
// })()


//callback function 



// function fetchData(fun){

//   console.log("I am fetthing data from the server")
//   setTimeout(()=>{
//     console.log("waiting for timeout to finish")
//     fun();
//   },2000)
// }

// fetchData(() => console.log("Helllo I am a callback function"))


// //  map, reduce,filter,search

// const n = [2,3,4,52,3]
// const new_arry =  n.map((i) => i*i)


// console.log(n,new_arry)



// let i=0;

// let j = 2;

// setTimeout(()=>{
//   console.log(i)
//   i++;
// },0)

// console.log(i)

// setTimeout(()=>{
//   console.log(i)
//   i++;
// },0)

// console.log(j)

// for(let i=0;i<10;i++){
//   setTimeout(()=>{
//     console.log(i)
//   },1000)
// }

// lexical environment 

// dynmaic environment this

// function declaration

// 'Use strict'
// function hello(){

//   var a = "hello I am here "

//   console.log(a)


//   console.log("Hello")
//   // console.log(this)
// }
// hello()

//function expression 

// const hell = ()=>{
//   console.log(a)

//   var a = "hello I am here "

//   console.log("hell")
// }
// hell()


// function parentFun(){
//   var a = 12;
//   console.log("a",this)
//   function firstChild(){
//     console.log("b",this)
//     // let self = this
//     const child = {
//       a : 1,
//       greet : function() {console.log("hello I am a greet function",this)}
//     }
//     child.greet()
//   }
//   firstChild()
// }
// parentFun()


// // const a = function(){
// //   console.log("a",this)
// //   const b = function(){
// //     console.log("b",this)
// //     const c = {
// //       hi:function(){
// //         console.log(this)
// //       }
// //     }
// //     c.hi()
// //   }
// //   b()
// // }
// // a()
// const obj = {
//   name:"billy",
//   sing(){
//     console.log('a',this)
//     // let self=this
//     var anotherFunc = ()=>{
//           console.log("b",this)
        
      
//     }
//     anotherFunc()
//   }
// }
// obj.sing()

// var d ={
//   name:"ab",
//   say() {return () => console.log(this)}
// }
// d.say()

// var d ={
//   name:"ab",
//   say: ()=> console.log(this)
// }
// d.say()



// const character = {
//   name: 'Simon',
//   getCharacter(){
//     return this.name; 
//   }
// }

  
  

// const giveMeTheCharacterNOW = character.getCharacter.bind(character)
 
// //How Would you fix this?
// console.log('?', giveMeTheCharacterNOW()); //this should return 'Simon' bud doesn't
// // 
// function a(){
//   console.log("hello")
// }
// a.call()


// function b(a,b){
//   console.log("hello",a,b)
//   // return a+b
// }
// let a = [1,2]
// let aa = 1
// let bb = 2
// console.log(b.call(null,a[0],a[1],aa,bb))

// // b.apply()
// b.apply(null,a)

// const hero ={
//   name:"Mario",
//   health : 100,
//   // heal : function (){
//   // }
//   heal(a,b){
//     this.health += a+b
//   },
//   attack(p){
//     this.health = this.health - p
//   }
// }

// const pricess ={
//   name:"Elf",
//   health : 30,
//   // heal : function (){
//   // }
// }

// // console.log(hero)
// // console.log(hero.health)

// // hero.attack(40);

// // console.log(hero.health)

// console.log(pricess.health)

// let a = [2,3]
// hero.heal.call(pricess,1,2)
// console.log(pricess.health)

// hero.heal.apply(pricess,a)
// console.log(pricess.health)

// const healing = hero.heal.bind(pricess,2,3)
// healing()

// console.log(pricess.health)

// // const [a,b] = a

// // .call
// // .apply 
// // .bind

// function abc(){
//   return function a1(){
//     let i = 10
//     return function b1(){
//       return "Hello Abc "+i
//     }
//   }
// }

// // console.log(i)

// let res = abc()
// let res1 = res()
// console.log(res)
// console.log(res1())

// console.log(res()())

// // let t = 0
// // for loop
// // t += c[i]
// // let arr = [add,multiply,divide]

// let sum = arr.reduce((t,c)=>{return t+c},0)

// console.log(sum)



// function addTwo(a){
// 	return a+2
// }
// function multiTwo(a){
// 	return a*10
// }
// const numbers = [addTwo,multiTwo];
// // let sum = 1
// // for i 
// // sum += i
// const n = numbers.reduceRight((t,f)=>f(t),1)
// console.log(n)


// function declaration 
// console.log(abc)

// function abc(){
//   console.log("Hello here")
// }


// console.log(fun)

// function expression 
// var fun = function (){
//   console.log("called me ")
// }

// Call By Value / Call by Reference

// let a = 10;
// let b = 30;

// b = a;   // call by value 
// a++;

// let obj ={ 
//   name:"abhi",
//   hobbies:{
//     coding: 3,
//     problem_solving : 7,
//   }
// }
// let obj1 ={ 
//   name:"qwerty",
//   hobbies:{
//     painting: 3,
//     gardening : 7,
//   }
// }

// console.log(obj1 === obj)

// obj = obj1; // sharing their references
// obj = {...obj1} // shallow cloning

// console.log(obj1 === obj)


// obj = Object.assign({},obj1) // shallow cloning


// structuredClone // deep cloning -> 

// obj = JSON.parse(JSON.stringify(obj1)) 
// // deep cloning

// let obj2 = structuredClone(obj1) //dee

// console.log(obj2)



// obj.hobbies = {}

// console.log(obj)


// console.log(obj1)

// obj = JSON.stringify(obj1) // // deep clone  not performance efficent

// console.log()




// obj1.name = "Hello"
// obj.name = "mandy"

// console.log(obj)
// console.log(obj1)


// console.log(a,b)


// closures

// function abc(){
//   let i =0;
//   return function(){
//     console.log("closures",++i)
//   }
// }

// let fun = abc();
// fun()
// fun()
// function are first classe varible
// class 


// function gg(){
//   console.log("hello")
// }
// gg()
// gg.age="28"

// console.log(gg)

let view;
function NuclearLaunchCode(){
  let timer = 200;
  if(view){
    console.log("You already created an object")
    return 
  }
  else {
    view = "set"
  }
  let timePassed =0;
  
  function launch(){
    timePassed  = -1
    console.log("BOOOM!!!!🔥")
  }
  setInterval(()=>timePassed--,1000)

  function peaceTime(){
    console.log(timePassed)
  }
  return {
    peaceTime
  }
}

// let nlc = NuclearLaunchCode();

// let nl = NuclearLaunchCode();



// NuclearLaunchCode.whatTime()

// function hero(ar){
//   // let {a,b} = ob 
//   // ob.a = 100;

//   // ob.b = 111
//   // ar[0] = 230
//   let a = [...ar] // 

//   a[0] = 100
//   console.log(a)
//   // a = 12;
//   // b = 23;
//   // console.log(ob.a,ob.b) // 12 23


// }

// Call by value 
// let a = 1;
// let b = 2;

// Call by reference for objects
// let ob = {a:1,b:2}


//arrays
// let ar = [1,2,3,4]
// console.log(ar) // 1,2

// hero(ar)

// console.log(ar) // 1,2


// function multiply(a,b){
//   return a*b; 
// }

// let multiplyByTwo = multiply.bind(this,2) // return (2*b)
// let multiplyByTen = multiply.bind(this,10)

// console.log(multiplyByTwo(100)) // 200

// console.log(multiplyByTen(10)) // 100



// ProtoType inhertance

// .__proto__

// let car = {
//   no_tires: 4,
//   window: 6,
//   color:"white",
// }

// let hero = {
//   name:"Thor",
//   attack(){
//     console.log(this.name + "Is attacking to -?" )
//   },
//   sing(){
//     console.log("I am singing here in Asgard")
//   }
// }

// // let prince = {
// //   name:"Alexzendar",
// //   cry(){
// //     console.log("I am crying")
// //   }
// // }
// // prince.__proto__ = hero
// let prince = Object.create(hero)

// // prince.name ="Alexzendar";
// // prince.cry = function cry(){
// //   console.log("i am crying")
// // }
// for(prop in prince){
//   if(prince.hasOwnProperty(prop)){
//     console.log(prince[prop])
//   }
// }
// console.log(prince)

// prince.__proto__ = hero;

// console.log(hero.isPrototypeOf(prince))

// for(prop in prince){
//   if(prince.hasOwnProperty(prop)){
//     console.log(prince[prop])
//   }
// }



// Array.__proto__ = 


// Array.prototype.map = function(){
//   let arr = [];
//   console.log(this)
//   for(let i=0;i<this.length;i++){
//     arr.push(this[i]+"🔥")
//   }
//   return arr
// }



// let ar =[1,23,4,5]

// // 1🔥, 23🔥, 4🔥, 5🔥
// console.log(ar.map())
// Date.prototype.getLastYear = function(){
//   return this.getFullYear() - 1
// }


// let d = new Date('2022-03-25');

// console.log(d.getLastYear())
// console.log(d.getFullYear() -1)

// // bind  with help of call or apply



// function multi(a,v){

// }
// function sum(a,v){
  
// }

// const elf ={
//   name:"Robin",
//   weapon:"Bow",
//   attack(){
//     return "attacking by"+ this.name
//   }
// }
// const elf2 ={
//   name:"Eve",
//   weapon:"fire",
//   attack(){
//     return "attacking by"+ this.name
//   }
// }
// console.


// Factory function 

// function elf(name,weapon){
//   return {
//     name:name,
//     weapon:weapon,
//     attack(){
//           return "attacking by"+ this.name
//     }
//   }
// }

// const robin = elf("Robin","bow")
// const eve = elf("Eve","fire")


// console.log(robin.attack())
// console.log(eve.attack())

// const elfPowers = {
//   attack(){
//       return "attacking by "+ this.name
//   },
//   builing(){
//     return "Building by "+ this.name

//   },
//   singing(){
//     return "attacking by "+ this.name
//   }
// }

// function elf(name,weapon){
//   return {
//     name:name,
//     weapon:weapon,
//   }
// }
// elf.prototype.attack = function(){
//     return "attacking by "+ this.name
// }

// const robin = elf("Robin","bow")
// // robin.attack = elfPowers.attack
// // robin.builing = elfPowers.builing
// // robin.singing = elfPowers.builing

// // const eve = elf("Eve","fire")
// // eve.attack = elfPowers.attack
// // eve.builing = elfPowers.builing
// for(prop in robin){
//   console.log(prop)
// }
// console.log(robin.attack())
// // console.log(eve.builing())



// const elfPowers = {
//   attack(){
//       return "attacking by "+ this.name
//   },
//   builing(){
//     return "Building by "+ this.name

//   },
//   singing(){
//     return "attacking by "+ this.name
//   }
// }

// function elf(name,weapon){
//   let newElf = Object.create(elfPowers)
//   newElf.name = name
//   newElf.weapon = weapon
//   return newElf
// }

// const robin = elf("Robin","bow")

// const eve = elf("Eve","fire")
// console.log(robin.attack())
// console.log(eve.builing())


// Constructor Function 

// let r = new Array()
// let f = new Function()


// let n = new Number(3)
// typeof 
// let i = 3;
// // === and == 

// let s = new String("Text me ")
// let str = "Text me "


// function Elf(name,weapon){
//   this.name = name
//   this.weapon = weapon;
//   // this.attack = function attack(){

//   // }
// }

// Elf.prototype.attack = function(){
//       return this.name +" is attacking by "+ this.weapon
// }
// Elf.prototype.building = function(){

//   // -------------------------------
//   // console.log(this)
//   // let self = this
//   // return function(){
//   //   // console.log(self)
//   //   return self.name +" is Building by "+ self.weapon
//   // }
//   // ----------------------
//   console.log(this)
//   let fun = function(){
//     // console.log(self)
//     return this.name +" is Building by "+ this.weapon
//   }
//   return fun.bind(this);

// }
// let robin = new Elf("Robin","Bow 🏹")

// // console.log(robin.__proto__)
//   // console.log(robin instanceof Elf)
// // console.log(robin)
// // console.log(robin.attack())

// let Eve = new Elf("Eve","Fire 🔥")
// // console.log(Eve)
// console.log(Eve.building()())


// create your own name function in the Array Constructor function 
// which is going to return a object with your properties 


// class Elf{
//   constructor(name,weapon){
//     this.name = name
//     this.weapon = weapon
//   }
//   attack(){
//     return this.name +" is attacking by "+ this.weapon
//   }
//   building(){
//       return this.name +" is Building by "+ this.weapon
//   }
// }
// let r = new Elf("Robin","Bow")
// let e = new Elf("Eve","Fire")
// console.log(r.attack())
// console.log(e.building())



// Write a Car class which is going to ask for user for tire,color, model, window
// and create a two object out of it 
// and check the Instanceof 

// class Car{ // bases  private public 

//   #chasis= "Toon" // private 
//   seat_cover = "Leather"
//   constructor(tire,color,model,windows){
//     console.log("I am a super class")
//     this.tire = tire
//     this.color = color;
//     this.model = model;
//     this.windows = windows
//   }

//   #setChasis(c){
//     this.#chasis = c;
//   } 
//   AuthenticationFunction(s,new_chasis){
//     let secret = "788334"
//     if(s === secret){
//       return this.#setChasis(new_chasis)
//     }
//     else {
//       return "Failed the update the value of chasis "
//     }
//   }
//   getChasis(){
//     // console.log(this.#chasis )
//     return this.#chasis
//   } 

//   setColor(color){
//     this.color = color
//     return "Color has been set to "+ this.color
//   }

//   getColor(){
//     return this.color;
//   }

//   setTire(tire){
//     this.tire = tire
//     return "tire has upgraded set to "+ this.tire
//   }

//   getTire(){
//     return this.tire;
//   }

  
// }
// class Suv extends Car{   // derived class 
//   constructor(tire,color,model,windows,drive){
//     super(tire,color,model,windows)
//     this.drive = drive
//   }
//   combinedSetValues(color,tire){
//     super.setColor(color)
//     super.setTire(tire)
//     return "Changed happened successful";
//   }
//   setDrive(drive){
//     this.drive = drive
//     return "Dive has been set to "+ this.drive
//   }
//   getDrive(){
//     return this.drive
//   }
// }

// let swift = new Car(4,"red","VZI",6)
// // console.log(swift.setChasis("Roon"))
// // console.log(swift.getChasis())
// console.log(swift.model = "78343")
// console.log(swift.model)
// console.log(swift.AuthenticationFunction("788334","XSHDHE#$J"))
// console.log(swift.getChasis())
// console.log(swift.combinedSetValues("blue",10))
// console.log(swift.getColor())
// console.log(swift.getTire())

// let truck = new Suv(10,"blue","Heavy Duty",6,"4x4")

// // console.log( swift instanceof Car)
// // console.log(truck instanceof Suv)

// // console.log(swift)
// // console.log(truck.getColor())
// // console.log(truck.setColor("Black"))

// // console.log(truck.setCol("Green"))

// // console.log(truck.getTire())
// // console.log(truck.setTire(2))

// console.log(truck.combinedSetValues("yellow",6))
// console.log(truck.getColor())
// console.log(truck.getTire())

// console.log(truck.getDrive())
// console.log(truck.setDrive("2x2"))



// Create a class called Hero Class height, weight, isMortal,  

// class Marvel 
// name, weapon,
// Flying, Building, attack
// Iron man, thor


// class DC 
// Super man and batman
// name, weapon, weakness 
// Flying, Building, attack,lasers 

// class Hero{
//   constructor(){
//     this.height = height;
//     this.weight = weight;
//     this.isMortal = isMortal;
//   }
// }


// class Hero{ // base class 
//   #clothes = "Fancy"
//   static run = "Not running"
//   constructor(name,isFly,speciality){
//     this.name = name
//     this.isFly = isFly;
//     this.speciality = speciality;
//   }
//   strong(){
//     // let self = this;
//     for(let key in this){
//       console.log(key,this[key])
//     }
//     return  " is the strongest Hero with  "+this.speciality
//   }
//   #accessClothes(){
//     return this.#clothes;
//   }
//   static helloClass(){
//     return "Hello "+this
//   }
// }
// class Marvel extends Hero{
//   // clothes = "Semi-Fancy"
//   constructor(name,isFly,speciality,isAvenger){
//     super(name,isFly,speciality)
//     this.isAvenger=isAvenger;
//   }
//   strong(){
//     // console.log(super.strong())
//     return this.name+ " is the strongest Hero with Marvel "+this.speciality
//   }
// }
// class DC extends Hero{
//   // clothes = "Strong"
//   constructor(name,isFly,speciality,isMutant){
//     super(name,isFly,speciality)
//     this.isMutant=isMutant;
//   }
// }

// let ironMan = new Marvel("Ironman",true,"Genius",true)
// let drStrange = new Marvel("Dr.Strange",true,"Magic",true)

// let batman = new DC("Batman",false,"Rich",false)
// let Adam = new DC("Black Adam",true,"Power",true)

// // console.log(Marvel.run)
// let h = new Hero("Flash",false,"speed")

// // console.log(Hero.helloClass())

// console.log(h.strong())

// // console.log(ironMan instanceof DC)
// console.log(ironMan.strong())



// Functional Programming 

// Function should be a pure function
// let i = 1
// function abc(a,b){
//   return a+b;
// }
// i = abc(3,4)

// console.log(i)


// let a = [1,2,3,4,2];

// function aa(a){
//   let b = [];
//   for(let i=0;i<a.length;i++){
//     b[i] *= a[i]
//   }
//   b = a.map(e => {
//     e *= e;
//   });
//   return b
// }

// aa(a)
// console.log(a)




// let multi = (a,b)=>{
//   return a*b
// }
// let multi = (a) => (b) => a*b; 

// console.log(multi(5)(4))


// let multi = (a,b)=>{
//   return a*b;
// }
// let multiByTwo = multi.bind(null,2)

// let multiByFive = multi.bind(null,5)

// console.log(multiByTwo(4))

// console.log(multiByFive(8))


// async of js 

// new Promise -> pending, fulfulled, rejected


// Callback

// Flying('up',"10",function (){
//   Flying('down',"10",function(){
//     Flying('up',"10",function(){
//       return true
//   })
// })
// }
// )

// Flying('up',"10")
// .then(()=>Flying('down',"10"))
// .then(()=>Flying('up',"10"))
// .then(data)=> console.log("data"))

// facebook('/users', function(){
//   if(error){
//     throw Error;
//   }
//   catch(err){
//     console.log(err)
//   }
//   facebook('/users/abhi',function(){
//     if(error){
//       throw Error;
//     }
//     catch(err){
//       console.log(err)
//     }
//     facebook('/users/abhi/profile',function(){
//       if(error){
//         throw Error;
//       }
//       catch(err){
//         console.log(err)
//       }
//   }
// })

// console.log("I am the first")

// setTimeout(()=>console.log("I am a async Callback Queue"),1000)

// let promise = new Promise((resolve,reject)=>{
//   if(true)
//     resolve("I am resolved ")
//   else reject("I am reject ")
// })
// promise.then((res)=>console.log(res))

// setTimeout(()=>console.log("I am a async Callback Queue"),0)

// console.log("I am the first")

// let ageError = new Error("Age can't be 0 ") 
// let promise = new Promise((resolve,reject)=>{
//   if(true)
//     resolve("I am resolved ")
//   else reject("I am reject ")
// })

// promise
// .then((res)=> res+"!")
// .then((r)=>r+"?")
// .then((r1)=>{
//   if(r1.age ===  0)
//     throw ageError;
//   return 1;
// })
// .catch((err)=>console.log("error has been occoured",err))
// .then((e)=>console.log(e))


// fetch('https://jsonplaceholder.typicode.com/posts').
// then(response => response.json())
// .then((res)=> console.log(res))



// let promise1 = new Promise((resolve,reject)=>{
//   setTimeout(resolve,1000,"Promise1")
// })
// let promise2 = new Promise((resolve,reject)=>{
//   setTimeout(resolve,100,"Promise2")
// })
// let promise3 = new Promise((resolve,reject)=>{
//   setTimeout(reject,4000,"Promise3")
// })

// Promise.all([promise1,promise2,promise3]).then((result)=>{
//   console.log(result)
// }).catch((err)=> console.log("oops error",err))


// let urls = [
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/albums",
//   'https://jsonplaceholder.typicode.com/posts'
// ]
// Promise.all(
//   urls.map((url)=> fetch(url)
//     .then(res => res.json())
//     .then(result =>{
//       console.log("comments",result[0])
//       console.log("albums",result[1])
//       console.log("posts",result[2])
//   }))
// )


// let promise = new Promise((resolve,reject)=>{
//   if(true)
//     resolve("I am resolved ")
//   else reject("I am reject ")
// })
// promise.then((res)=>console.log(res))



// async function fetchData(){
//   try{
//     let promise =  await new Promise((resolve,reject)=>{
//       if(false)
//         resolve("I am resolved ")
//       else reject("I am reject ")
//     })
//     try{
//       // part error

//     }
//     catch(err){

//     }
//     console.log(promise)
//   }
//   catch(err){
//     console.log("Ooops Error",err)
//   }
  
  
// } 
// fetchData()

// for await 


// let urls = [
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/albums",
//   'https://jsonplaceholder.typicode.com/posts'
// ]
// Promise.all(
//   urls.map((url)=> fetch(url)
//     .then(res => res.json())
//     .then(result =>{
//       console.log("comments",result[0])
//       console.log("albums",result[1])
//       console.log("posts",result[2])
//   }))
// )

// 

// let urls = [
//   "https://jsonplaceholder.typicode.com/comments",
//   "https://jsonplaceholder.typicode.com/albums",
//   'https://jsonplaceholder.typicode.com/posts'
// ]

// let data= []
// const fetchData2 = async function(){
//   const arrayOfPromises = urls.map(url => fetch(url))

//   for await (let req of arrayOfPromises){
//     const data = await req.json()
//     console.log(data)
//   }
// }
// fetchData2()




// const fetchData = async function(){
//   const [comments,albums,posts] =  await Promise.all(urls.map(
//     async function (url){
//       const res = await fetch(url);
//       // const result = res.json()
//       return res.json();
//     }))
//     console.log("comments",comments)
//     console.log("albums",albums)
//     console.log("posts",posts)

// }
// console.log(fetchData())




// Promise.all
// Promise.race([])
// // sequencial manner 
// Promise.allSettled([])

// const promisify = (item,delay) => new Promise((resolve,reject)=> setTimeout(()=> {
//   if(item == 'c') reject(item)
//   else resolve(item)
// },delay))

// const a = ()=> promisify('a',100);
// const b = ()=> promisify('b',1000);
// const c = ()=> promisify('c',2000);

// async function parallel(){
//   try{
//   const promises = [a(),b(),c()];
//   const [o1,o2,o3] = await Promise.all(promises)
//   console.log(` Promises result is Parallel Execution is ${o1}, ${o2}, ${o3}`)
// }
// catch(err){
//   console.log("Parallel failed ")
// }
// }



// async function racing (){
//   const promises = [a(),b(),c()];
//   const [o1] = await Promise.race(promises)
//   console.log(`fastest promises is ${o1}`)
// }

// async function sequence(){
//   const aa = await a();
//   const bb  = await b();
//   const cc = await c();
//   console.log(`Sequence runs all the promises one by one ${aa} ${bb} ${cc}`)
// }

// racing() // 

// parallel() // 

// // sequence() // 



// async function allSettledPromise (){
//   const promises = [a(),b(),c()];
//   const o1 = await Promise.allSettled(promises)
//   console.log(o1)
// }
// allSettledPromise()


// fetch('https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=H61vqaWSocSafnAPtlUNgudEorDPGenL')
// .then(res=>res.json()).then(r=> console.log(r))

// let e = new Error
// try{

// }
// catch{

// }

// let e = new Error('I am a error');
// console.log(e.message)
// console.log(e.name)

// console.log(e.stack)

// class AuthentionError extends Error{
//   constructor(msg,sec){
//     super(msg)
//     this.secret = sec
//   }
// }
// class TypeError extends Error{
//   constructor(msg="Some Type 0 mistake ",sec){
//     super(msg)
//     this.secret = sec
//   }
// }
// throw new TypeError

// let er = new AuthentionError('Failed to Authenticate',"Secret is hello")

// console.log(er)


// "aaa1232@gmail.com"
// passowd checker 


// regx 

// /pattern/modifier;

// case Insensitive -> Upper case or lower case  A  a

// let text = "Visit @W3Schools789";
// let pattern = /[^abc]/ig;
// let result = text.match(pattern);

// console.log(result)

// let text2 = "re, green, red, green, gren, gr, blue, yellow";
// let pattern2 = /(red|green)/i;
// let result2 = text2.match(pattern2);

// console.log(result2)


// // let req = new RegExp("(red|green)","i")
// let pattern_exc = /(red|green)/      
// console.log(pattern_exc.exec(text2))


// let text3 = "Hello Hi HI hello Hi"
// let pattern3 = /\bH/;
// let result3 = text3.search(pattern3);


// let text = "hello, LOOK AT YOU! "; 
// let pattern = /LO\B/i;
// let result = text.search(pattern);



// let text = "10 or 100, 1000 or 100000?";
// let pattern = /\d{3,}/g; 
// let result = text.match(pattern);

// let q1 = "10 or 100, 1000 or 100000";
// let pattern = /0$/g; \\? 
// // let result = pattern.test(q1)
// let result = q1.match(q1)


// let text = "Is this all there is";
// let pattern = /is(?= all)/;
// let result = text.match(pattern);

// // n$
// console.log("index of pattern matching is => ",result)

// let text ="Lorem ipsum is typically a corrupted version of De finibus bonorum et malorum, a 1st-century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. The first two words themselves are a truncation of dolorem ipsu"

// function findArray(){ // aeiou
//   let pattern = /[aeiou](?= tru)/ig;
// let result = text.match(pattern);
// console.log(result)

// } 
// findArray(text)


// "abb@gmail.com"
// // "S@sdfklsfj123"  1 atleast decimal char, 1 atleast Capital in starting, atleast 1special character,   atleat 8 character should be the length.....



// :: TODO: Save your api somewhere safe, this is not the safe way
const url = 'https://api.tomorrow.io/v4/weather/forecast?location=Bangalore&timesteps=1d&apikey=H61vqaWSocSafnAPtlUNgudEorDPGenL';
const options = {method: 'GET', headers: {accept: 'application/json'}};


async function fetchData(){
  let data = await fetch(url, options)
  .then(res => res.json())
  .then(json => {
    return json
  })
  .catch(err => console.error(err));

  const daily = data?.timelines?.daily;
  const location = data?.location?.location;

  // console.log(daily)

  console.log(daily instanceof Array)
  daily.forEach(({time,values}) => {
    function dd(values){
      const {rainIntensityMax,precipitationProbabilityMax,snowIntensityMax,snowAccumulationMax,cloudCoverMax} = values
    // console.log(values.rainIntensityMax)
      console.log(time)
      if (rainIntensityMax > 0 && precipitationProbabilityMax > 50) {
          return "Rainy";
      }
        // Check for Snow
        if (snowIntensityMax > 0 || snowAccumulationMax > 0) {
          if (temperatureMax < 0) {
              return "Snowy";
          } else {
              return "Wet Snow Conditions";
          }
      }
          // Check for Sunny
          if (cloudCoverMax < 20 && precipitationProbabilityMax === 0) {
            return "Sunny";
        }
            // Check for Cloudy
            if (cloudCoverMax > 60) {
              return "Cloudy";
          }


            // Check for Cloudy
            if (cloudCoverMax > 60) {
              return "Cloudy";
          }
        }
        console.log(dd(values))

    }
    );
}
fetchData()

// console.log(fetchData())
// if (rainIntensityMax > 0 && precipitationProbabilityMax > 50) {
//     return "Rainy";
// }
//   // Check for Snow
//   if (snowIntensityMax > 0 || snowAccumulationMax > 0) {
//     if (temperatureMax < 0) {
//         return "Snowy";
//     } else {
//         return "Wet Snow Conditions";
//     }
// }
//     // Check for Sunny
//     if (cloudCoverMax < 20 && precipitationProbabilityMax === 0) {
//       return "Sunny";
//   }
//       // Check for Cloudy
//       if (cloudCoverMax > 60) {
//         return "Cloudy";
//     }


//       // Check for Cloudy
//       if (cloudCoverMax > 60) {
//         return "Cloudy";
//     }














