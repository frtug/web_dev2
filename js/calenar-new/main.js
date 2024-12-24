let date = new Date();
// console.log(date)

// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// console.log(date.getDay())



let month = date.getMonth();
let year = date.getFullYear();


let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

console.log(months[month])
const days = document.querySelector('.days');

const m = document.querySelector('.month-year > span')
const y = document.querySelector('.month-year > span + span')

function displayCalendar(){

    let DaysCurrMonth = new Date(year,month+1,0).getDate()
    console.log(DaysCurrMonth)

    let firstDay = new Date(year,month,1).getDay()
    console.log(firstDay)

    let lastDay = new Date(year,month+1,0).getDay()
    console.log(lastDay)

    let DaysPrevMonth = new Date(year,month,0).getDate()
    console.log(DaysPrevMonth)

    let u = ""
        // write your code for previous days to show
        for(let i=0;i<firstDay;i++){
           u +=  `<li class="dis" > ${DaysPrevMonth - (firstDay-1)+i}</li>`
        }

        // current days display on calendar
        for(let i=1;i<=DaysCurrMonth;i++){
            u +=  `<li class="en"> ${i}</li>`
         }

         // write a logic for next month days; 

    m.innerHTML = months[month];
    y.innerHTML = year;

    days.innerHTML = u;

    
    // 0-6
    // previous month's days = 30
    
    // i = 4 // from this index we are going to fill items 
    // i = 0,1,2,3
    //     27 28 29 30

    // function displayPrevDays(index,month){
    //     // write your code here
    //     for(let i=0;i<index;i++){
    //         console.log(month - (index-1)+i)
    //     }
    // }
    // displayPrevDays(4,30)

    // display previous month days 
    // 30 ,firstDay-1 -> 28+1 
    // loop to run firstDay (n)
    // i = firstDay-1

    // print all the current month days 1 to DaysCurrMonth

    // next months days, 


}
displayCalendar()

// event listener that will increase or decrease the month varible 
const prev = document.querySelector('.action-buttons > button')
const next = document.querySelector('.action-buttons > button + button')

console.log(next)
prev.addEventListener('click',()=>{

    month--; // 0-11
    if(month < 0){
        date = new Date(year,month,1)
        year = date.getFullYear();
        month = date.getMonth();
    }

    displayCalendar()


})
next.addEventListener('click',()=>{

    month++;

    if(month > 11){
        date = new Date(year,month,1)
        year = date.getFullYear();
        month = date.getMonth();
    }
    displayCalendar()
})
// if(month > 11) {
//     year++;
// }
// if(month < 0) {
//     year--;
// }
// date = new(year,month,1)





