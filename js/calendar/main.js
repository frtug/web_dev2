// console.log("calendar")

let year = 2024
let date = {
    Jan:31,
    Feb:28,
    Mar:31,
    Apr:30,
    May:31,
    Jun:30,
    Jul:31,
    Aug:31,
    Sep:30,
    Oct:31,
    Nov:30,
    Dec:31,
}
let cal = document.getElementById('Calendar')

// for(let d in date){
//     console.log(d,date[d])
//     // month wise loop
    
//     let month = document.createElement('div')
//     month.classList.add('row ')

//     cal.appendChild(month)
//     let h1 = document.createElement('h1')
//     h1.innerHTML = d+" 2024";
//     month.appendChild(h1)
//     for(let i=1;i<=date[d];i++){
//         // days wise loop
//         let day = document.createElement('span');
//         day.innerHTML = i;
//         month.appendChild(day)
//     }
// }


for(let d in date){
    console.log(d,date[d])
    // month wise loop
    
    let cal = document.getElementById("Calendar")

    cal.innerHTML += `

<div class="d-flex justify-content-around fw-bold">

                <div class="text-danger">Sun</div>
                <div class="text-success">Mon</div>
                <div class="text-success">Tue</div>
                <div class="text-success">Wed</div>
                <div class="text-success">Thu</div>
                <div class="text-success">Fri</div>
                <div class="text-success">Sat</div>
        </div>
        <div class="calendar border rounded p-3">
          
            <div class="border rounded bg-light">1</div>
            <div class="border rounded bg-light">2</div>
            <!-- Row for days 3 to 9 -->
            <div class="border rounded bg-light">3</div>
            <div class="border rounded bg-light">4</div>
            <div class="border rounded bg-light">5</div>
            <div class="border rounded bg-light">6</div>
            <div class="border rounded bg-light">7</div>

            </div>
            <div class="calendar border rounded p-3">
          
                <div class="border rounded bg-light">8</div>
                <div class="border rounded bg-light">9</div>
                <!-- Row for days 3 to 9 -->
                <div class="border rounded bg-light">10</div>
                <div class="border rounded bg-light">11</div>
                <div class="border rounded bg-light">12</div>
                <div class="border rounded bg-light">13</div>
                <div class="border rounded bg-light">14</div>
    
                </div>

            
        </div>`
    
    for(let i=1;i<=date[d];i++){
       
    }
}





















// function clickButton(){
//     console.log("button is clicked")
//     // p.classList.toggle("custom_style")
//     customToggle(p,"custom_style")

// }
// function customToggle(p,t){
//     let str = p.getAttribute('class');
//     let arr = str.split(" ");
//     console.log(str)

//     console.log(arr)

//     console.log(arr.includes('custom_style'))
//     if(str == null || !arr.includes('custom_style')){
//         p.classList.add("custom_style")
//     }
//     else
//         p.classList.remove("custom_style")

//     //if already existed remove that class
//     // else add that class in that element 
// }


// let body = document.querySelector('body')
// console.log(body)
// let p = document.createElement('p')


// p.innerHTML = "I am paragraph, not alone"
// // p.style.border = "2px solid black"
// // p.style.backgroundColor = "pink"

// p.classList.add("add")
// // p.classList.remove("custom_style")

// let h1 = document.querySelector('h1');

// body.removeChild(h1)

// body.appendChild(p)


// // TODO:: Create a button using javascript with some id or classname

// // write your code here



// // ---------------------------




// // ----------------------
// let input = document.querySelector('input[type=checkbox]')

// console.log(input.getAttributeNames() ) // create a loop as TODO to access all the names of attributes of an input

// // console.log(input.getAttribute('type') )
// // console.log(input.getAttribute('name') )
// // console.log(input.getAttribute('id') )

// // p.setAttribute('class','custom_style')

// input.removeAttribute('name')

// console.log(input.getAttributeNames() ) // create a loop as TODO to access all the names of attributes of an input

// // console.log(p)



// Carousel 


// // Images - > images 
// let prev = document.getElementById('prev')// docu...
// let next = document.getElementById('next')// docu...
// let img = document.getElementsByTagName('img')[0]// 

// let urls = ["https://www.w3schools.com/html/pic_trulli.jpg","https://www.w3schools.com/html/img_girl.jpg","https://www.w3schools.com/html/img_chania.jpg"]
// let value = 0;

// // img.setAttribute('src',urls[0])

// function increment(){
//     // if(value > urls.length-1)
//     value++;

//     value = value%urls.length;
//     console.log("Value pict",value)
//     img.setAttribute('src',urls[value])
// }
// function decrement(){
//     value--;
//     if(value < 0)
//         value = urls.length + value;
//     console.log("Value pict",value)

//     img.setAttribute('src',urls[value])
// }




// prev.addEventListener('click',decrement)

// next.addEventListener('click',increment)






// ------------------------ 27 Nov 

// let urls = ["https://www.w3schools.com/html/pic_trulli.jpg",
//     "https://www.w3schools.com/html/img_girl.jpg",
//     "https://www.w3schools.com/html/img_chania.jpg"]

// let currentIndex = 0;
// let image = document.getElementsByTagName('img')[0]
// console.log(image)

// let left = document.getElementById('left')
// let right = document.getElementById('right')

// function decrement(){
//     currentIndex--;
//     if(currentIndex < 0){
//         currentIndex = urls.length-1;
//     }
//     console.log(currentIndex)
//     image.setAttribute('src',urls[currentIndex])

// }
// function increment(){
//     currentIndex++;
//     // if(currentIndex > urls.length-1){
//     //     currentIndex = currentIndex%urls.length
//     // }
//     if(currentIndex > urls.length-1){
//         currentIndex = 0;
//     }
//     console.log(currentIndex)
    

//      image.setAttribute('src',urls[currentIndex])
// }


// left.addEventListener('click',decrement)
// right.addEventListener('click',increment)


