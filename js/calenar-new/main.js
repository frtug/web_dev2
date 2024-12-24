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


function displayCalendar(){

    let DaysCurrMonth = new Date(year,month+1,0).getDate()
    console.log(DaysCurrMonth)

    let firstDay = new Date(year,month,1).getDay()
    console.log(firstDay)

    let lastDay = new Date(year,month+1,0).getDay()
    console.log(lastDay)

    let DaysPrevMonth = new Date(year,month,0).getDate()
    console.log(DaysPrevMonth)

    // display previous month days 
    // 30 ,firstDay-1 -> 28+1 
    // loop to run firstDay (n)
    // i = firstDay-1

    // print all the current month days 1 to DaysCurrMonth

    // next months days, 


}
displayCalendar()

// event listener that will increase or decrease the month varible 

if(month > 11) {
    year++;
}
if(month < 0) {
    year--;
}
date = new(year,month,1)





